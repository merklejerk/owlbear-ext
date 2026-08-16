<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{
        select: string;
        bonus: number;
        backspace: void;
    }>();

    const dice = [
        { id: "d4", sides: 4, label: "d4", path: "M 50 14 L 88 84 L 12 84 Z" },
        { id: "d6", sides: 6, label: "d6", path: "M 18 18 L 82 18 L 82 82 L 18 82 Z" },
        { id: "d8", sides: 8, label: "d8", path: "M 50 10 L 88 50 L 50 90 L 12 50 Z" },
        { id: "d10", sides: 10, label: "d10", path: "M 50 8 L 88 38 L 50 92 L 12 38 Z" },
        { id: "d12", sides: 12, label: "d12", path: "M 50 10 L 88 38 L 74 86 L 26 86 L 12 38 Z" },
        { id: "d20", sides: 20, label: "d20", path: "M 50 10 L 86 30 L 86 70 L 50 90 L 14 70 L 14 30 Z" },
        {
            id: "d20a",
            sides: 20,
            label: "d20a",
            advantage: true,
            path: "M 44 14 L 80 34 L 80 74 L 44 94 L 8 74 L 8 34 Z",
            bgPath: "M 56 6 L 92 26 L 92 66 L 56 86 L 20 66 L 20 26 Z",
        },
        {
            id: "d20d",
            sides: 20,
            label: "d20d",
            disadvantage: true,
            path: "M 56 14 L 92 34 L 92 74 L 56 94 L 20 74 L 20 34 Z",
            bgPath: "M 44 22 L 80 42 L 80 82 L 44 102 L 8 82 L 8 42 Z",
        },
        { id: "d100", sides: 100, label: "d100", path: "M 50 12 A 38 38 0 1 0 50 88 A 38 38 0 1 0 50 12 Z" },
    ];

    function handleClick(dieId: string) {
        dispatch("select", dieId);
    }
</script>

<div class="dice-shortcuts-row">
    {#each dice as die (die.id)}
        <button
            type="button"
            class="die-button"
            class:advantage={die.advantage}
            class:disadvantage={die.disadvantage}
            title={die.advantage ? "Add d20 with advantage (d20a)" : die.disadvantage ? "Add d20 with disadvantage (d20d)" : `Add ${die.label}`}
            on:click={() => handleClick(die.id)}
        >
            <svg class="die-icon" viewBox="0 0 100 100">
                {#if die.bgPath}
                    <path class="die-shape die-bg-shape" d={die.bgPath} />
                {/if}
                <path class="die-shape" d={die.path} />
                <text
                    class="die-label"
                    x={die.id === "d20a" ? 48 : die.id === "d20d" ? 52 : 50}
                    y={die.id === "d4" ? 64 : 54}
                    text-anchor="middle"
                    dominant-baseline="central"
                    font-size={die.id === "d20a" || die.id === "d20d" ? 34 : die.id === "d100" ? 36 : 46}
                >
                    {die.label}
                </text>
            </svg>
        </button>
    {/each}
    <button
        type="button"
        class="die-button bonus-button"
        title="Add +1 bonus"
        on:click={() => dispatch("bonus", 1)}
    >
        <svg class="die-icon" viewBox="0 0 100 100">
            <rect class="die-shape" x="14" y="20" width="72" height="60" rx="14" />
            <text
                class="die-label"
                x="50"
                y="52"
                text-anchor="middle"
                dominant-baseline="central"
                font-size="38"
            >
                +1
            </text>
        </svg>
    </button>
    <button
        type="button"
        class="die-button bonus-button"
        title="Add -1 bonus"
        on:click={() => dispatch("bonus", -1)}
    >
        <svg class="die-icon" viewBox="0 0 100 100">
            <rect class="die-shape" x="14" y="20" width="72" height="60" rx="14" />
            <text
                class="die-label"
                x="50"
                y="52"
                text-anchor="middle"
                dominant-baseline="central"
                font-size="38"
            >
                -1
            </text>
        </svg>
    </button>
    <button
        type="button"
        class="die-button backspace-button"
        title="Delete last term (Backspace)"
        on:click={() => dispatch("backspace")}
    >
        <svg class="die-icon" viewBox="0 0 100 100">
            <path class="die-shape" d="M 88 20 L 38 20 L 12 50 L 38 80 L 88 80 Z" />
            <path
                class="die-mark"
                d="M 44 38 L 68 62 M 68 38 L 44 62"
            />
        </svg>
    </button>
</div>

<style lang="scss">
    .dice-shortcuts-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.35em;
        width: 100%;
        padding-top: 0.25em;
    }

    .die-button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
        user-select: none;
        transition: transform 0.12s ease;

        &:hover {
            transform: translateY(-2px) scale(1.08);

            .die-shape {
                fill: var(--theme-primary-color, #3f51b5);
                opacity: 0.45;
                filter: drop-shadow(0 2px 8px color-mix(in hsl, var(--theme-primary-color, #3f51b5), transparent 50%));
            }

            .die-label {
                fill: #fff;
            }

            &.advantage {
                .die-shape {
                    fill: #f59e0b;
                    opacity: 0.5;
                    filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.7));
                }

                .die-label {
                    fill: #fff;
                }
            }

            &.disadvantage {
                .die-shape {
                    fill: #ef4444;
                    opacity: 0.5;
                    filter: drop-shadow(0 0 8px rgba(239, 68, 68, 0.7));
                }

                .die-label {
                    fill: #fff;
                }
            }
        }

        &:active {
            transform: translateY(0) scale(0.95);
        }

        .die-icon {
            width: 100%;
            height: auto;
            max-height: 3.5em;
            min-height: 3.2em;
            overflow: visible;
        }

        .die-shape {
            fill: var(--theme-text-color, #fff);
            opacity: 0.25;
            stroke: none;
            transition: fill 0.15s ease, opacity 0.15s ease, filter 0.15s ease;

            &.die-bg-shape {
                opacity: 0.15;
            }
        }

        &.advantage .die-shape {
            fill: color-mix(in hsl, #f59e0b, var(--theme-text-color, #fff) 40%);
            opacity: 0.3;

            &.die-bg-shape {
                opacity: 0.18;
            }
        }

        &.disadvantage .die-shape {
            fill: color-mix(in hsl, #ef4444, var(--theme-text-color, #fff) 40%);
            opacity: 0.3;

            &.die-bg-shape {
                opacity: 0.18;
            }
        }

        .die-label {
            fill: var(--theme-text-color, #fff);
            font-family: inherit;
            font-weight: 900;
            user-select: none;
            pointer-events: none;
            transition: fill 0.15s ease;
        }

        .die-mark {
            stroke: var(--theme-text-color, #fff);
            stroke-width: 6;
            stroke-linecap: round;
            fill: none;
            pointer-events: none;
            transition: stroke 0.15s ease;
        }
    }
</style>
