<script lang="ts">
    import { getObr } from "$lib/obr-host.svelte";
    import type { Metadata, Player } from "@owlbear-rodeo/sdk";
    import { onMount } from "svelte";
    import { type RollMsgData } from "./types";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { BinaryRollMode, createBinaryRollChain, isEmptyRoll, simplifyRoll, type Roll } from "./rolls";

    const obr = getObr();
    const pendingRollIds = {} as { [id: string]: boolean };

    interface OfficialDiceRollMetadataDice {
        id: string;
        style: string;
        type: string;
    }

    interface OfficialDiceRollMetadataDiceCombination {
        dice: Array<
            OfficialDiceRollMetadataDice |
            OfficialDiceRollMetadataDiceCombination
        >;
        combination: 'HIGHEST' | 'LOWEST' | undefined;
    }

    interface OfficialDiceRollMetadata {
        bonus: number;
        hidden: boolean;
        dice: Array<
            OfficialDiceRollMetadataDice |
            OfficialDiceRollMetadataDiceCombination
        >;
    }
   
    interface OfficialDiceRollValuesMetadata {
        [id: string]: number | null;
    }

    function isCombinationDice(
        dice: OfficialDiceRollMetadataDice |
            OfficialDiceRollMetadataDiceCombination
    ): dice is OfficialDiceRollMetadataDiceCombination {
        return !!(dice as any).dice;
    }

    function getDiceIds
        <T extends OfficialDiceRollMetadataDice
            | OfficialDiceRollMetadataDiceCombination>
        (dice: T | Array<T>)
        : number[]
    {
        if (Array.isArray(dice)) {
            return dice.map(d => getDiceIds(d)).flat(1);
        }
        if (isCombinationDice(dice)) {
            return dice.dice.map(d => getDiceIds(d)).flat(1);
        }
        return [Number(dice.id)];
    }

    function isD100Roll(roll: OfficialDiceRollMetadataDiceCombination): boolean {
        if (roll.combination) return false;
        if (roll.dice.length !== 2) return false;
        if (roll.dice.some(d => isCombinationDice(d))) return false;
        const dice = roll.dice as OfficialDiceRollMetadataDice[];
        return dice[0].type === 'D100' && dice[1].type === 'D10';
    }

    function getD100RollResult(
        dice: OfficialDiceRollMetadataDice[],
        rollValues: OfficialDiceRollValuesMetadata,
    ): number {
        const r100 = rollValues[dice[0].id]!;
        const r10 = rollValues[dice[1].id]!;
        if (r100 === 0 && r10 === 0) {
            return 100;
        }
        return r100 + r10;
    }

    function translateRoll(
        roll: OfficialDiceRollMetadata,
        rollValues: OfficialDiceRollValuesMetadata,
    ): Roll {
        const childRolls = [] as Roll[];
        for (const d of roll.dice) {
            if (isCombinationDice(d)) {
                if (isD100Roll(d)) {
                    childRolls.push({
                        sides: 100,
                        results: [getD100RollResult(
                            d.dice as OfficialDiceRollMetadataDice[],
                            rollValues,
                        )],
                    });
                } else {
                    let mode = BinaryRollMode.ADD;
                    if (d.combination === 'HIGHEST') {
                        mode = BinaryRollMode.MAX;
                    } else if (d.combination === 'LOWEST') {
                        mode = BinaryRollMode.MIN;
                    }
                    childRolls.push(
                        createBinaryRollChain(
                            mode,
                            d.dice.map(d => translateRoll(
                                {
                                    bonus: 0,
                                    dice: [d],
                                    hidden: false,
                                },
                                rollValues,
                            )),
                        ),
                    );
                }
            } else {
                const sides = toSides(d.type);
                const result = rollValues[d.id]!;
                childRolls.push({
                    sides,
                    results: [sides === 10 && result === 0 ? 10 : result],
                });
            }
        }
        if (roll.bonus) {
            childRolls.push(roll.bonus);
        }
        if (childRolls.length === 0) {
            return 0;
        }
        return childRolls.length > 1
            ? createBinaryRollChain(BinaryRollMode.ADD, childRolls)
            : childRolls[0];
    }

    function consumeMetadata(connId: string, metadata: Metadata)
        : {
            rollId: string;
            roll: OfficialDiceRollMetadata;
            rollValues: OfficialDiceRollValuesMetadata
        } | undefined
    {
        const [roll, rollValues] = [
            metadata['rodeo.owlbear.dice/roll'] as
                OfficialDiceRollMetadata | undefined,
            metadata['rodeo.owlbear.dice/rollValues'] as
                OfficialDiceRollValuesMetadata | undefined,
        ];
        if (!roll || !rollValues) return;
        const diceIds = getDiceIds(roll.dice);
        if (diceIds.length === 0) return;
        const maxDiceId = diceIds.reduce((a, v) => Math.max(a, v));
        const rollId = `${connId}-${maxDiceId}`;
        // If any dice values are unset, mark it as pending.
        // All dice values must be set.
        if (diceIds.some(id => typeof rollValues[id] !== 'number')) {
            pendingRollIds[rollId] = true;
            return;
        }
        // Roll must be previously marked pending.
        if (!pendingRollIds[rollId]) return;
        delete pendingRollIds[rollId];
        return { rollId, roll, rollValues };
    }

    function handlePlayerChange(player: Player): void {
        const r = consumeMetadata(player.connectionId, player.metadata);
        if (!r) return;
        const rollId = `${player.connectionId}-${r.rollId}`;

        // Translate roll history.
        const translated = simplifyRoll(translateRoll(r.roll, r.rollValues));
        if (!isEmptyRoll(translated)) {
            obr.broadcast.sendMessage(
                PUBLIC_EXT_ID,
                {
                    topic: 'roll',
                    imported: true,
                    rolls: [translated],
                    when: Date.now(),
                    playerId: player.id,
                    rollId,
                } satisfies RollMsgData,
                { destination: 'LOCAL' },
            );
        }
    }

    function toSides(type: string): number {
        return Number(type.substring(1));
    }

    onMount(() => {
        (async () => {
            await Promise.all([
                (async () => { 
                    consumeMetadata(
                        ...await Promise.all([
                            obr.player.getConnectionId(),
                            obr.player.getMetadata(),
                        ]),
                    );
                })(),
                (async () => {
                    const players = await obr.party.getPlayers();
                    for (const p of players) {
                        consumeMetadata(p.id, p.metadata);
                    }
                })(),
            ])
            obr.player.onChange(handlePlayerChange);
            obr.party.onChange(players => {
                players.forEach(handlePlayerChange);
            });
        })();
    });
</script>
