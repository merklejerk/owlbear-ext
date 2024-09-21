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

    const obr = getObr();
    const players = getPlayersStore();
    export let displayDelay = 6000;
    let rollHistory: RollInstanceById = {};
    let pruneTimer: any = null;
    let animationVars = {} as Record<string, string>;

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
        pruneTimer = setInterval(() => updateRollHistory(), 100);
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
        if (pruneTimer) {
            clearInterval(pruneTimer);
        }
    });

    async function show() {
        obr.popover.setWidth(POPOVER_ID, 384);
        obr.popover.setHeight(POPOVER_ID, 132);
    }

    async function hide() {
        return Promise.all([
            obr.popover.setWidth(POPOVER_ID, 0),
            obr.popover.setHeight(POPOVER_ID, 0),
        ]);
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
        left: 0;
        right: 0; 
        bottom: 0;
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
                background-color: color-mix(in hsl, var(--theme-bg), transparent 50%);
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
                color: red;
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

<div class="component" style={Object.entries(animationVars).map(([k, v]) => `${k}: ${v}`).join(';')}>
    <div class="history">
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


