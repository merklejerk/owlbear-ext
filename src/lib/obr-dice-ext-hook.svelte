<script lang="ts">
    import { getObr } from "$lib/obr-host.svelte";
    import type { Player } from "@owlbear-rodeo/sdk";
    import { onMount } from "svelte";
    import { type RollMsgData } from "./types";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import type { Roll } from "./rolls";

    const obr = getObr();
    const minDiceIdForPlayer = {} as { [playerId: string]: number };

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

    function translateRoll(
        roll: OfficialDiceRollMetadata,
        rollValues: OfficialDiceRollValuesMetadata,
    ): Roll {
        const translated: Roll = {
            mode: 'ADD',
            rolls: [],
        };
        for (const d of roll.dice) {
            if (isCombinationDice(d)) {
                let mode = 'ADD';
                if (d.combination === 'HIGHEST') {
                    mode = 'MAX';
                } else if (d.combination === 'LOWEST') {
                    mode = 'MIN';
                }
                translated.rolls.push({
                    mode: mode as 'ADD' | 'MIN' | 'MAX',
                    rolls: d.dice.map(d =>
                        translateRoll(
                            {
                                bonus: 0,
                                dice: [d],
                                hidden: false,
                            },
                            rollValues,
                        ),
                    ),
                });
            } else {
                translated.rolls.push({
                    sides: toSides(d.type),
                    result: rollValues[d.id]!,
                });
            }
        }
        if (roll.bonus) {
            translated.rolls.push(roll.bonus);
        }
        return translated;
    }

    function handlePlayer(player: Player): void {
        const [roll, rollValues] = [
            player.metadata['rodeo.owlbear.dice/roll'] as
                OfficialDiceRollMetadata | undefined,
            player.metadata['rodeo.owlbear.dice/rollValues'] as
                OfficialDiceRollValuesMetadata | undefined,
        ];
        if (!roll || !rollValues) {
            return;
        }
        const diceIds = getDiceIds(roll.dice);
        if (diceIds.length === 0) {
            return;
        }
        // At least one dice must be new.
        const minDiceId = minDiceIdForPlayer[player.id] ?? 0;
        if (!diceIds.some(id => id >= minDiceId)) {
            return;
        }
        // All dice values must be set.
        if (diceIds.some(id => typeof rollValues[id] !== 'number')) {
            return;
        }
        const maxDiceId = diceIds.reduce((a, v) => Math.max(a, v));
        minDiceIdForPlayer[player.id] = Math.max(
            maxDiceId + 1,
            minDiceIdForPlayer[player.id] ?? 0,
        );
        const rollId = `${player.id}-${maxDiceId}`;

        // Translate roll history.
        const translated = translateRoll(roll, rollValues);
        if (translated.rolls.length !== 0) {
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
        obr.player.onChange(handlePlayer);
        obr.party.onChange(players => {
            players.forEach(handlePlayer);
        });
    });
</script>
