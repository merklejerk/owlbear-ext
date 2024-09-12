<script lang="ts">
    import { getObr } from "$lib/obr-host.svelte";
    import type { Player } from "@owlbear-rodeo/sdk";
    import { onMount } from "svelte";
    import { type CritMsgData, type Roll, type RollMsgData } from "./types";
    import { PUBLIC_EXT_ID } from "$env/static/public";

    const obr = getObr();
    const minDiceIdForPlayer = {} as { [playerId: string]: number };

    interface OfficialDiceRollMetadataDice {
        id: string;
        style: string;
        type: string;
    }

    interface OfficialDiceRollMetadataDiceCombination {
        dice: OfficialDiceRollMetadataDice[];
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
        const diceIds = roll.dice
            .map(d => isCombinationDice(d) ? d.dice.map(d => d.id) : [d.id])
            .flat(1)
            .map(id => Number(id));
        if (diceIds.length === 0) {
            return;
        }
        // At least one dice must be new.
        const minDiceId =
            minDiceIdForPlayer[player.id] ?? 0;
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
        
        // Detect crits.
        if (!roll.hidden) {
            for (const d of roll.dice) {
                let v = null as number | null; 
                if (isCombinationDice(d)) {
                    if (d.dice.length !== 0 && d.dice.every(d => d.type === 'D20')) {
                        if (d.combination === 'HIGHEST') {
                            v = d.dice.reduce((a, d_) => Math.max(rollValues[d_.id]!, a), rollValues[d.dice[0].id]!);
                        } else if (d.combination === 'LOWEST') {
                            v = d.dice.reduce((a, d_) => Math.min(rollValues[d_.id]!, a), rollValues[d.dice[0].id]!);
                        }
                    }
                } else if (d.type === 'D20') {
                    v = rollValues[d.id]!;
                }
                if (v === 20) {
                    obr.broadcast.sendMessage(
                        PUBLIC_EXT_ID,
                        {
                            topic: 'crit',
                            when: Date.now(),
                            playerId: player.id,
                            playerName: player.name,
                            rollId,
                        } satisfies CritMsgData,
                        { destination: 'LOCAL' },
                    );
                    break;
                }
            }
        }

        // Translate roll history.
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
                    rolls: d.dice.map(d => ({
                        sides: toSides(d.type),
                        result: rollValues[d.id]!,
                    })),
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
        if (translated.rolls.length !== 0) {
            obr.broadcast.sendMessage(
                PUBLIC_EXT_ID,
                {
                    topic: 'roll',
                    imported: true,
                    roll: translated,
                    when: Date.now(),
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
