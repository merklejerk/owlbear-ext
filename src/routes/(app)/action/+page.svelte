<script lang="ts">
    import { PUBLIC_DEV_MODE, PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr, getPlayersStore } from "$lib/obr-host.svelte";
    import RollPrinter from "$lib/roll-printer.svelte";
    import { getRollResult, isCriticalRoll, ParseRollError, parseRollSpec, reroll, type Roll } from "$lib/rolls";
    import { isRollMsg, type RollMsgData } from "$lib/types";
    import { onMount } from "svelte";

    interface RollHistoryItem {
        playerId: string;
        rolls: Roll[];
        when: number;
        rollId: string;
    }

    const obr = getObr();
    const players = getPlayersStore();
    let rollHistory = [] as RollHistoryItem[];
    let historyElement: HTMLElement;
    let rollInput = '';

    async function submitRoll() {
        let rolls;
        try {
            rolls = parseRollSpec(rollInput || '1d20').map(r => reroll(r));
        } catch (e) {
            if (e instanceof ParseRollError) {
                await obr.notification.show(e.message, 'ERROR');
                return;
            }
            throw e;
        }
        if (!rolls.length) return;
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            {
                topic: 'roll',
                rolls,
                rollId: crypto.randomUUID(),
                playerId: obr.player.id,
                when: Date.now(),
            } satisfies RollMsgData,
            { destination: 'ALL' },
        );
    }

    async function runMsg() {
        const id = '4';
        obr.player.setMetadata({
            "rodeo.owlbear.dice/roll": {
                "dice": [
                    {
                        "id": id,
                        "style": "GALAXY",
                        "type": "D20"
                    }
                ],
                "bonus": 0,
                "hidden": false
            },
            "rodeo.owlbear.dice/rollThrows": {
                [id]: {
                    "position": {
                        "x": 0.20537940271938376,
                        "y": 1.1449740242507513,
                        "z": 0.05277898777306045
                    },
                    "rotation": {
                        "x": 0.3198192930153163,
                        "y": -0.6380895309264671,
                        "z": 0.6235898458538826,
                        "w": -0.3188935159032798
                    },
                    "linearVelocity": {
                        "x": -1.7964689400944611,
                        "y": 0,
                        "z": -0.4616617390473094
                    },
                    "angularVelocity": {
                        "x": 2.697357524254186,
                        "y": 5.753645908644349,
                        "z": 2.077194140139361
                    }
                }
            },
            "rodeo.owlbear.dice/rollValues": {
                [id]: null
            },
            "rodeo.owlbear.dice/rollTransforms": {
                [id]: null
            }
        });
        setTimeout(async () => {
            const md = await obr.player.getMetadata();
            console.log(md['rodeo.owlbear.dice/rollValues']);
        }, 2000);
    }

    async function runCritTest() {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            {
                topic: 'roll',
                rolls: [ { sides: 20, results: [20] } ],
                rollId: crypto.randomUUID(),
                playerId: obr.player.id,
                when: Date.now(),

            } satisfies RollMsgData,
            { destination: 'ALL' },
        );
    }

    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, async msg => {
            if (!isRollMsg(msg) || !historyElement) return;
            rollHistory.push({
                playerId: msg.data.playerId,
                rolls: msg.data.rolls,
                rollId: msg.data.rollId,
                when: msg.data.when,
            });
            rollHistory = rollHistory.slice(-100);
            const autoScroll = Math.ceil(historyElement.scrollTop) >=
                Math.floor(historyElement.scrollHeight - historyElement.clientHeight);
            if (autoScroll) {
                setTimeout(() => historyElement.scrollTop = historyElement.scrollHeight, 10);
            }
        });
    });
</script>

<style lang="scss">
    .container {
        position: absolute;
        inset: 0;
        padding: 1ex;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .roll-history {
            flex: 1 0;
            width: 100%;
            overflow: auto;
            margin: 0.5em 0;
    
            > .item {
                margin-left: 2ex;
                text-indent: -2ex;
                &:not(:last-child) {
                    margin-bottom: 0.15em;
                }

                > .prefix {
                    > .name {
                        font-weight: bold;
                    }
                }
    
                > .timestamp {
                    display: none;
                }

                > .formulas {
                    > .formula:not(:last-child)::after {
                        content: ', ';
                    }
                }

                > .results {
                    > .result {
                        font-weight: bold;
                    }

                    > .result:not(:last-child)::after {
                        content: ', ';
                    }
                }
            }

            > .item.critical {
                > :not(.prefix, .timestamp) {
                    color: orangered;
                }
            }
        }

        .roll-input {
            display: flex;
            gap: 1ex;
            justify-content: space-between;

            > input[type="text"] {
                flex: 1 0;
            }
        }
    }

    .container:not(.dev) {
        .roll-input, .test-controls {
            display: none;
        }
    }
</style>

<div class="container" class:dev={!!PUBLIC_DEV_MODE}>
    <div class="test-controls">
        <button on:click={() => runCritTest()}>crit!</button>
        <button on:click={() => runMsg()}>msg!</button>
    </div>
    <div class="roll-history" bind:this={historyElement}>
        {#each rollHistory as item, idx (idx)}
        <div class="item" class:critical={item.rolls.some(r => isCriticalRoll(r))}>
            <span class="timestamp">
                {new Date(item.when).toLocaleTimeString()}
            </span>
            <span class="prefix">
                <span class="name">{$players[item.playerId]?.name ?? '?'}</span>:
            </span>
            <span class="formulas">
                {#each item.rolls as roll, idx (idx)}
                <span class="formula">
                    <RollPrinter {roll} />
                </span>
                {/each}
            </span>
            <span class="results">
                =
                {#each item.rolls as roll, idx (idx)}
                <span class="result">{getRollResult(roll)}</span>
                {/each}
            </span>
        </div>
        {/each}
    </div>
    <form class="roll-input" on:submit|preventDefault={() => submitRoll()}>
        <input tabindex="0" type="text" autofocus bind:value={rollInput} placeholder="1d20" />
        <input tabindex="0" type="submit" />
    </form>
</div>