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
    import { onMount } from "svelte";

    const obr = getObr();
    const players = getPlayersStore();
    let rolls: RollInstanceById = {};

    onMount(() => {
        rolls = JSON.parse(atob(
            $page.url.searchParams.get('rolls')! as string
        )) as RollInstanceById;
    });
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
        {#each Object.values(rolls) as entry (entry.rollId)}
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


