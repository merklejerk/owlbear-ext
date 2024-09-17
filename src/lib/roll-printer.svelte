<script lang="ts">
    import {
        isCombination,
        isDice,
        isDiceGroup,
        simplifyRoll,
        type Roll,
        type RollCombination,
        type RollCombinationMode,
    } from "./rolls";

    export let roll: Roll;
    export let parent: RollCombination | undefined = undefined;
    let simplifiedRoll: Roll;

    $: simplifiedRoll = simplifyRoll(roll);

    interface AdvantageRoll {
        kind: 'ADVANTAGE' | 'DISADVANTAGE';
        sides: number;
        results: number[][];
    }

    function tryCoalesceToAdvantage(roll: RollCombination): AdvantageRoll | undefined {
        if (roll.rolls.length !== 2) return;
        if (!['MAX', 'MIN'].includes(roll.mode)) return;
        if (roll.rolls.every(r => isDice(r))) {
            const sides = roll.rolls[0].sides;
            if (!roll.rolls.every(r => r.sides === sides)) return;
            return {
                kind: roll.mode === 'MIN' ? 'DISADVANTAGE' : 'ADVANTAGE',
                sides,
                results: [roll.rolls.map(r => r.result)],
            };
        } else if (roll.rolls.every(r => isDiceGroup(r))) {
            const sides = roll.rolls[0].sides;
            if (!roll.rolls.every(r => r.sides === sides)) return;
            return {
                kind: roll.mode === 'MIN' ? 'DISADVANTAGE' : 'ADVANTAGE',
                sides,
                results: roll.rolls.map(r => r.results),
            };
        }
    }

    function computeComboOperator(roll: RollCombination, subrollIdx: number): string {
        const currentMode = roll.mode;
        if ((!parent && subrollIdx === 0) || ['MIN', 'MAX'].includes(currentMode)) return '';
        const nextSubRoll = roll.rolls[subrollIdx] ;
        const op = currentMode === 'ADD' ? '+' : '-';
        if (isCombination(nextSubRoll)
            && ['ADD', 'SUB'].includes(nextSubRoll.mode)
            && nextSubRoll.rolls.length !== 0)
        {
            if (op !== computeComboOperator(nextSubRoll, 0)) {
                return '-';
            }
            return '+';
        } else if (typeof nextSubRoll === 'number') {
            if (nextSubRoll < 0) {
               if (op === '+')  {
                   return '-';
               } else {
                    return '+';
               }
            }
        }
        return op;
    }
</script>

<style lang="scss">
    .formula.child::before {
        content: var(--combo-operator, '');
    }
    
    .formula {
        display: contents;

        > .combo {
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
                        content: ', ';
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

<span class="formula" class:child={!!parent}>
    {#if isCombination(simplifiedRoll)}
    {@const adv = tryCoalesceToAdvantage(simplifiedRoll)}
    {#if !adv}
    <span
        class="combo"
        class:root={!parent}
        class:add={simplifiedRoll.mode === 'ADD'}
        class:sub={simplifiedRoll.mode === 'SUB'}
        class:min={simplifiedRoll.mode === 'MIN'}
        class:max={simplifiedRoll.mode === 'MAX'}
    >
        {#each simplifiedRoll.rolls as subroll, si}
        <span class="roll" style={`--combo-operator: ' ${computeComboOperator(simplifiedRoll, si)} '`}><!--
            --><svelte:self parent={simplifiedRoll} roll={subroll} /><!--
        --></span>
        {/each}
    </span>
    {:else}
    <span class="spec">
        {adv.results.length}d{adv.sides}<!--
        -->{#if adv.kind === 'ADVANTAGE'}a{:else if adv.kind === 'DISADVANTAGE'}d{/if}
    </span>
    <span class="dice-results"><!--
        -->{#each adv.results as group}<!--
        --><span class="dice-result-group"><!--
            -->{#each group as result}<!--
            --><span class="dice-result">{result}</span><!--
            -->{/each}<!--
        --></span><!--
        -->{/each}<!--
    --></span>
    {/if}
    {:else if isDice(simplifiedRoll)}
    <span class="spec">1d{simplifiedRoll.sides}</span>
    <span class="dice-results">
        <span class="dice-result">{simplifiedRoll.result}</span>
    </span>
    {:else if isDiceGroup(simplifiedRoll)}
    <span class="spec">{simplifiedRoll.results.length}d{simplifiedRoll.sides}</span>
    <span class="dice-results"><!--
        -->{#each simplifiedRoll.results as r}<!--
        --><span class="dice-result">{r}</span><!--
        -->{/each}<!--
    --></span>
    {:else}
    <span class="literal">
        {Math.abs(simplifiedRoll)}
    </span>
    {/if}
</span>