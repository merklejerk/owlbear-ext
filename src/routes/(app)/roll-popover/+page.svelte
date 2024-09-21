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
    import { page } from "$app/stores";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr, getPlayersStore } from "$lib/obr-host.svelte";
    import RollPrinter from "$lib/roll-printer.svelte";
    import { getRollResult, type Roll } from "$lib/rolls";
    import { isRollMsg, type BroadcastMsg } from "$lib/types";
    import { delay } from "$lib/util";
    import { onMount } from "svelte";

    const obr = getObr();
    const players = getPlayersStore();
    export let displayDelay = 5000;
    let displayCounter = 0;
    const rollHistory: RollInstanceById = {};

    function pruneRollHistory() {
        const now = Date.now();
        for (const [k, v] of Object.entries(rollHistory)) {
            if (v.when + displayDelay < now) {
                delete rollHistory[k];
            }
        }
    }

    onMount(() => {
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
            pruneRollHistory();
            if (Object.keys(rollHistory).length !== 0) {
                show();
            } else {
                hide();
            }
        });
    });

    async function show() {
        const origCounter = displayCounter += 1;
        obr.popover.setWidth(POPOVER_ID, 384);
        obr.popover.setHeight(POPOVER_ID, 128);
        if (displayDelay > 0) {
            await delay(displayDelay);
            if (origCounter === displayCounter) {
                await hide();
            }
        }
    }

    async function hide() {
        return Promise.all([
            obr.popover.setWidth(POPOVER_ID, 0),
            obr.popover.setHeight(POPOVER_ID, 0),
        ]);
    }
</script>

<style lang="scss">
    .component {
        > .background {
            pointer-events: none;
            position: fixed;
            inset: 0;
            background-color: color-mix(in hsl, var(--theme-bg), transparent 50%);
        }
    }
</style>

<div class="component">
    <div class="background" />
    <div class="history">
        {#each Object.values(rollHistory) as entry (entry.rollId)}
        <div class="entry">
            <span class="player">{$players[entry.playerId].name}</span>
            rolled
            <span class="rolls">
                {#each entry.rolls as roll}
                <RollPrinter {roll} />
                {/each}
            </span>
            = 
            <span class="results">
                {#each entry.rolls as roll}
                {getRollResult(roll)}
                {/each}
            </span>
        </div>
        {/each}
    </div>
</div>


