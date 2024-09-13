<script lang="ts">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr, getPlayersStore } from "$lib/obr-host.svelte";
    import { getRollResult, parseRolls, toRollFormula, type Roll } from "$lib/rolls";
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

    async function submitRoll() {
        const rolls = parseRolls('');
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
        // const rollQuery = new URLSearchParams({ rolls: JSON.stringify(rolls) }).toString();
        // obr.popover.open({
        //     id: `${PUBLIC_EXT_ID}/roll/${obr.player}?${rollQuery}`,
        //     url: '/roll-popover',
        //     width: 256,
        //     height: 256,
        //     anchorOrigin: { horizontal: 'RIGHT', vertical: 'BOTTOM' },
        // });
    }

    async function runMsg() {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            { msg: 'hihi' },
            { destination: 'LOCAL' },
        );
    }

    async function runCritTest() {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            {
                topic: 'roll',
                rolls: [ { mode: 'ADD', rolls: [{ sides: 20, result: 20 }] }],
                rollId: crypto.randomUUID(),
                playerId: obr.player.id,
                when: Date.now(),

            } satisfies RollMsgData,
            { destination: 'ALL' },
        );
    }

    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, async msg => {
            if (!isRollMsg(msg)) return;
            rollHistory.push({
                playerId: msg.data.playerId,
                rolls: msg.data.rolls,
                rollId: msg.data.rollId,
                when: msg.data.when,
            });
            rollHistory = rollHistory;
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
            color: white;
            margin: 0.5em 0;
    
            > .item {
                display: flex;
                flex-direction: row;
                gap: 1ex;

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
</style>

<div class="container">
    <div class="test-controls">
        <button on:click={() => runCritTest()}>crit!</button>
        <button on:click={() => runMsg()}>msg!</button>
    </div>
    <div class="roll-history">
        {#each rollHistory as item, idx (idx)}
        <div class="item">
            <div class="timestamp">
                {new Date(item.when).toLocaleTimeString()}
            </div>
            <div class="prefix">
                <span class="name">{$players[item.playerId]?.name ?? '?'}</span>:
            </div>
            <div class="formula">
                {#each item.rolls as roll, idx (idx)}
                <span class="roll">{toRollFormula(roll)}</span>
                {/each}
            </div>
            <div class="result">
                =
                {#each item.rolls as roll, idx (idx)}
                <span class="result">{getRollResult(roll)}</span>
                {/each}
            </div>
        </div>
        {/each}
    </div>
    <form class="roll-input" on:submit|preventDefault={() => submitRoll()}>
        <input tabindex="0" type="text" autofocus />
        <input tabindex="0" type="submit" />
    </form>
</div>