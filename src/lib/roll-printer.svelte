<script lang="ts">
    import {
    BinaryRollMode,
        isBinaryRoll,
        isDiceGroup,
        simplifyRoll,
        type Roll,
        type BinaryRoll,
        isMinMaxRoll,
        type DiceGroup,
        isArithmeticRoll,
    } from "./rolls";

    type Sign = '+' | '-';

    export let roll: Roll;
    export let sign: Sign | undefined = undefined;
    let simplifiedRoll: Roll;

    $: simplifiedRoll = simplifyRoll(roll);

    interface AdvantageRoll {
        kind: 'ADVANTAGE' | 'DISADVANTAGE';
        sides: number;
        results: number[][];
    }

    function tryCoalesceToAdvantage(roll: BinaryRoll): AdvantageRoll | undefined {
        if (!isMinMaxRoll(roll)) return;
        if (roll.rolls.every(r => isDiceGroup(r))) {
            const subrolls = roll.rolls as [DiceGroup, DiceGroup];
            if (subrolls[0].sides !== subrolls[1].sides &&
                subrolls[0].results.length !== subrolls[1].results.length) return;
            return {
                kind: roll.mode === BinaryRollMode.MIN
                    ? 'DISADVANTAGE'
                    : 'ADVANTAGE',
                sides: subrolls[0].sides,
                results: subrolls.map(r => r.results),
            } satisfies AdvantageRoll;
        }
    }

    function getNestedArithmeticSign(roll: Roll, sign: Sign): Sign {
        const negated = sign === '-';
        if (isArithmeticRoll(roll)) {
            return negated
                ? (roll.mode === 'ADD' ? '-' : '+')
                : (roll.mode === 'ADD' ? '+' : '-');
        }
        return negated ? '-' : '+';
    }
</script>

<style lang="scss">
    .formula {
        display: contents;

        // &.negative {
        //     .spec::before, .literal::before {
        //         content: '- ';
        //     }
        // }

        // &.negative.first {
        //     .spec::before,  .literal::before {
        //         content: '-';
        //     }
        // }
        
        // &:not(.negative):not(.first) {
        //     .spec::before,  .literal::before {
        //         content: '+ ';
        //     }
        // }

        .operator:has(+ .literal) {
            display: none;
        }

        > .binary {
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

{#if true}
{@const r = simplifiedRoll}
<span class="formula">
    {#if isBinaryRoll(r)}
    {@const adv = tryCoalesceToAdvantage(r)}
    {#if adv}
    <span class="advantage">
        {#if sign}<span class="operator">{sign}</span>{/if}
        <span class="spec">
            {adv.results[0].length}<!--
        -->d{adv.sides}<!--
        -->{#if adv.kind === 'ADVANTAGE'}a{:else if adv.kind === 'DISADVANTAGE'}d{/if}
        </span>
        <span class="dice-results">
            {#each adv.results as group}<!--
            --><span class="dice-result-group"><!--
                -->{#each group as result}<!--
                --><span class="dice-result">{result}</span><!--
                -->{/each}<!--
            --></span>
            {/each}
        </span>
    </span>
    {:else}
    <span
        class="binary"
        class:add={r.mode === 'ADD'}
        class:sub={r.mode === 'SUB'}
        class:min={r.mode === 'MIN'}
        class:max={r.mode === 'MAX'}
    >
        {#if sign}<span class="operator">{sign}</span>{/if}
        <span class="roll">
            <svelte:self
                roll={r.rolls[0]} />
        </span>
        <span>
        {#if isArithmeticRoll(roll)}
            <svelte:self
                roll={r.rolls[1]}
                sign={getNestedArithmeticSign(r, sign ?? '+')} />
        {:else}
            <svelte:self
                roll={r.rolls[1]} />
            {/if}
        </span>
    </span>
    {/if}
    {:else if isDiceGroup(r)}
    <span class="dice">
        {#if sign}<span class="operator">{sign}</span>{/if}
        <span class="spec">{r.results.length}d{r.sides}</span>
        <span class="dice-results">
            {#each r.results as res}
            <span class="dice-result">{res}</span>
            {/each}
        </span>
    </span>
    {:else}
    <span class="literal">
        {#if sign === '+'}
        <span class="operator">{r >= 0 ? '+' : '-'}</span>
        {:else if sign === '-'}
        <span class="operator">{r >= 0 ? '-' : '+'}</span>
        {/if}
        {Math.abs(r)}
    </span>
    {/if}
</span>
{/if}