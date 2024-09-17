<script lang="ts">
    import { isCombination, isDice, simplifyRoll, type Dice, type Roll, type RollCombination } from "./rolls";

    export let roll: Roll;
    export let parent: RollCombination | undefined = undefined;

    interface CoalescedRoll {
        kind: 'ADVANTAGE' | 'DISADVANTAGE';
        dice: DiceGroup[];
    }

    interface DiceGroup {
        sides: number;
        results: number[];
        result: number;
    }

    function areCompatibleDiceGroups(groups: DiceGroup[]): boolean {
        if (groups.length === 0) return false;
        const sides = groups[0].sides;
        return !groups.some(g => g.sides !== sides);
    }

    function areValidDiceGroups(groups: Array<DiceGroup | undefined>): groups is DiceGroup[] {
        return groups.length !== 0 && groups.every(g => !!g);
    }

    function tryMergeDiceGroups(groups: DiceGroup[]): DiceGroup | undefined {
        if (!areCompatibleDiceGroups(groups)) return;
        return {
            sides: groups[0].sides,
            results: groups.map(g => g.results).flat(1),
            result: groups.reduce((a, v) => a + v.result, 0),
        };
    }

    function tryReduceToDiceGroup(roll: Roll)
        : DiceGroup | undefined
    {
        if (isCombination(roll)) {
            if (!['ADD', 'SUB'].includes(roll.mode)) return;
            if (roll.rolls.length === 0) return;
            const groups = roll.rolls.map(r => tryReduceToDiceGroup(r));
            if (!areValidDiceGroups(groups)) return;
            return tryMergeDiceGroups(groups);
        } else if (isDice(roll)) {
            return {
                sides: roll.sides,
                results: [roll.result],
                result: roll.result,
            };
        }
    }

    function tryCoalesceToAdvantage(roll: RollCombination): CoalescedRoll | undefined {
        if (roll.rolls.length !== 2) return;
        if (!['MAX', 'MIN'].includes(roll.mode)) return;
        const groups = roll.rolls.map(r => tryReduceToDiceGroup(r));
        if (!areValidDiceGroups(groups)) return;
        if (!areCompatibleDiceGroups(groups)) return;
        if (groups[0].results.length !== groups[1].results.length) return;
        return {
            kind: roll.mode === 'MIN' ? 'DISADVANTAGE' : 'ADVANTAGE',
            dice: groups,
        };
    }

    function tryCoaleseRoll(roll: Roll): CoalescedRoll | undefined {
        if (!isCombination(roll)) return;
        return tryCoalesceToAdvantage(roll);
    }

</script>

<style lang="scss">
    .root {
        display: contents;

        > .combo {
            &.add {
                > .roll {
                    &:not(:last-child)::after {
                        content: ' + ';
                    }
                }
            }
            &.sub {
                > .roll {
                    &:not(:last-child)::after {
                        content: ' - ';
                    }
                }
            }
            &.min {
                &::before {
                    content: 'min(';
                }
                &::after {
                    content: ')'
                }
                > .roll {
                    &:not(:last-child)::after {
                        content: ', ';
                    }
                }
            }
            
            &.max {
                &::before {
                    content: 'max(';
                }
                &::after {
                    content: ')'
                }
                > .roll {
                    &:not(:last-child)::after {
                        content: ',';
                    }
                }
            }
        }

        .dice-results {
            &::before {
                content: '(';
            }
            &::after {
                content: ')';
            }
            > .dice-result-group:not(:last-child)::after {
                content: ', ';
            }

            .dice-result:not(:last-child) {
                margin-right: 1ex;
            }

            .dice-result {
                font-style: italic;
            }
        }
    }
</style>


<span class="root" class:child={!!parent}>
    {#if isCombination(roll)}
    {@const coal = tryCoaleseRoll(roll)}
    {#if !coal}
    <span
        class="combo"
        class:add={roll.mode === 'ADD'}
        class:sub={roll.mode === 'SUB'}
        class:min={roll.mode === 'MIN'}
        class:max={roll.mode === 'MAX'}
    >
        {#each roll.rolls as subroll}
        <span class="roll">
            <svelte:self parent={roll} roll={subroll} />
        </span>
        {/each}
    </span>
    {:else}
    <span class="spec">
        {coal.dice[0].results.length}d{coal.dice[0].sides}<!--
        -->{#if coal.kind === 'ADVANTAGE'}a{:else if coal.kind === 'DISADVANTAGE'}d{/if}
    </span>
    <span class="dice-results"><!--
        -->{#each coal.dice as group}<!--
        --><span class="dice-result-group"><!--
            -->{#each group.results as result}<!--
            --><span class="dice-result">{result}</span><!--
            -->{/each}<!--
        --></span><!--
        -->{/each}<!--
    --></span>
    {/if}
    {:else if isDice(roll)}
    <span class="spec">1d{roll.sides}</span>
    <span class="dice-results">
        <span class="dice-result">{roll.result}</span>
    </span>
    {:else}
    <span class="literal">
        {roll}
    </span>
    {/if}
</span>