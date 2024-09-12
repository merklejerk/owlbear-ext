<script lang="ts">
    import { getObr } from "$lib/obr-host.svelte";
    import type { Player } from "@owlbear-rodeo/sdk";
    import { onMount } from "svelte";
    import _ from 'underscore';
    import { getMessageBus } from "./message-bus.svelte";

    const obr = getObr();
    const minObrDiceExtRollIdForPlayerConnection = {} as { [connId: string]: number };
    const bus = getMessageBus();

    interface OfficialDiceRollMetadataDice {
        id: string;
        style: string;
        type: string;
    }

    interface OfficialDiceRollMetadataDiceCombination {
        dice: OfficialDiceRollMetadataDice[];
        combination: 'HIGHEST' | 'LOWEST';
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

    function handlePlayerChange(player: Player): void {
        const [roll, rollValues] = [
            player.metadata['rodeo.owlbear.dice/roll'] as
                OfficialDiceRollMetadata | undefined,
            player.metadata['rodeo.owlbear.dice/rollValues'] as
                OfficialDiceRollValuesMetadata | undefined,
        ];
        console.log(player.name, rollValues);
        if (!roll || !rollValues || roll.hidden) {
            return;
        }
        // All dice values must be set.
        const diceIds = roll.dice
            .map(d => isCombinationDice(d) ? d.dice.map(d => d.id) : [d.id])
            .flat(1)
            .map(id => Number(id));
        if (diceIds.some(id => typeof rollValues[id] !== 'number')) {
            return;
        }
        const minRollId =
            minObrDiceExtRollIdForPlayerConnection[player.connectionId] ?? 0;
        minObrDiceExtRollIdForPlayerConnection[player.connectionId] =
            diceIds.reduce((a, v) => Math.max(a, v));
        for (const d of roll.dice) {
            let v = null as number | null; 
            if (isCombinationDice(d)) {
                const validDice = d.dice.filter(d => Number(d.id) >= minRollId);
                if (validDice.length !== 0 && validDice.every(d => d.type === 'D20')) {
                    v = d.combination === 'HIGHEST'
                        ? v = validDice.reduce((a, d_) => Math.max(rollValues[d_.id]!, a), rollValues[validDice[0].id]!)
                        : v = validDice.reduce((a, d_) => Math.min(rollValues[d_.id]!, a), rollValues[validDice[0].id]!);
                }
            } else if (d.type === 'D20') {
                if (Number(d.id) >= minRollId) {
                    v = rollValues[d.id]!;
                }
            }
            if (v === 20) {
                bus.emit('crit', player.id);
                return;
            }
        }
    }

    onMount(() => {
        obr.player.onChange(handlePlayerChange);
        obr.party.onChange(players => {
            players.forEach(handlePlayerChange);
        });
    });
</script>
