<script lang="ts" context="module">
    export const POPOVER_ID = `${PUBLIC_EXT_ID}/roll-popover`;

    export interface RollInstance {
        playerId: string;
        when: number;
        rolls: Roll[];
        rollId: string;
    }

    export interface RollInstanceById {
        [id: string]: RollInstance;
    }
</script>

<script lang="ts">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr, getPlayersStore } from "$lib/obr-host.svelte";
    import RollPrinter from "$lib/roll-printer.svelte";
    import { getRollResult, isCriticalRoll, type Roll } from "$lib/rolls";
    import { isRollMsg, type BroadcastMsg } from "$lib/types";
    import { onDestroy, onMount } from "svelte";

    const DISAPPEAR_ANIM_FRAC = 0.1;
    const MIN_HEIGHT = 132;
    const MAX_HEIGHT = 512;

    const obr = getObr();
    const players = getPlayersStore();
    export let displayDelay = 7000;
    let rollHistory: RollInstanceById = {};
    let tickTimer: any = null;
    let animationVars = {} as Record<string, string>;
    let historyElement: HTMLDivElement;
    let componentElement: HTMLDivElement;

    $: {
        const disappearDelay = displayDelay * (1 - DISAPPEAR_ANIM_FRAC);
        animationVars = {
            '--disappear-delay': `${disappearDelay}ms`,
        };
    }

    function updateRollHistory(dirty?: boolean) {
        const now = Date.now();
        let changed = !!dirty;
        for (const [k, v] of Object.entries(rollHistory)) {
            if (v.when + displayDelay < now) {
                changed = true;
                delete rollHistory[k];
            }
        }
        if (changed)  {
            rollHistory = rollHistory;
            if (Object.keys(rollHistory).length !== 0) {
                show();
            } else {
                hide();
            } 
        }
    }

    onMount(() => {
        tickTimer = setInterval(() => {
            updateRollHistory();
            fitWindow();
        }, 100);
        obr.broadcast.onMessage(PUBLIC_EXT_ID, (e: BroadcastMsg) => {
            if (!isRollMsg(e)) return;
            const { data } = e;
            if (data.imported) return;
            rollHistory[data.rollId] = {
                playerId: data.playerId,
                rollId: data.rollId,
                rolls: data.rolls,
                when: data.when,
            };
            updateRollHistory(true);
        });
    });

    onDestroy(() => {
        if (tickTimer) {
            clearInterval(tickTimer);
        }
    });

    async function fitWindow() {
       if (window.window.innerWidth)  {
            if (historyElement.scrollHeight < MAX_HEIGHT) {
                await resize(
                    window.window.innerWidth,
                    Math.max(MIN_HEIGHT, historyElement.scrollHeight + 10),
                );
            }
       }
    }

    async function show() {
       resize(384, MIN_HEIGHT);
    }

    async function hide() {
        return resize(0, 0);
    }

    async function resize(w: number, h: number): Promise<void> {
        await Promise.all([
            obr.popover.setWidth(POPOVER_ID, w),
            obr.popover.setHeight(POPOVER_ID, h),
        ]);
        componentElement.scrollTop = componentElement.scrollHeight;
    }

    async function wipe() {
        rollHistory = {};
        hide();
    }
</script>

<style lang="scss">
    :root {
        --appear-duration: 0.15s;
        --disappear-duration: 0.15s;
        --disappear-delay: 3s;
    }

    .component {
        position: absolute;
        inset: 0;
        overflow: hidden;
        padding: 1ex;
        font-size: 1.33em;
        font-family: sans-serif;

        > .history {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.5em; 
            
            .entry {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                transform-origin: center;
                animation:
                    cubic-bezier(.43,.89,.86,1.22) 1 forwards appear,
                    cubic-bezier(.19,-0.42,.89,1.15) 1 forwards appear2;
                animation-duration: var(--appear-duration), var(--disappear-duration);
                animation-delay: 0.05s, var(--disappear-delay);
                background-color: color-mix(in hsl, var(--theme-bg), transparent 30%);
                border-radius: 0.5em;
                padding: 0.5ex;
               
                > .lead {
                    display: block;
                }

                > .body {
                    display: block;
                }

                .player {
                    font-weight: bold;
                }

                .total {
                    font-weight: bold;
                }

                .formulas {
                    font-size: 0.8em;
                }
            }

            .critical {
                color: orangered;
            }
        }
    }

    @keyframes appear {
        0% {
            opacity: 0;
            transform: scale(0.25);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    
    @keyframes appear2 {
        100% {
            opacity: 0;
            transform: scale(0.25);
        }
        0% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>

<div class="component"
    style={Object.entries(animationVars).map(([k, v]) => `${k}: ${v}`).join(';')}
    on:click={() => wipe()}
    bind:this={componentElement}
    >
    <div class="history" bind:this={historyElement}>
        {#each Object.values(rollHistory) as entry (entry.rollId)}
        <div class="entry">
            <span class="lead">
                <span class="player">{$players[entry.playerId].name}</span>
                rolled
            </span>
            <span class="body" class:critical={entry.rolls.some(r => isCriticalRoll(r))}>
                <span class="formulas">
                    {#each entry.rolls as roll}
                    <RollPrinter {roll} />
                    {/each}
                    =
                </span>
                <span class="results">
                    {#each entry.rolls as roll}
                    <span class="total">
                        {getRollResult(roll)}
                    </span>
                    {/each}
                </span>
            </span>
        </div>
        {/each}
    </div>
</div>


