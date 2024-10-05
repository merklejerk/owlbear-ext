<script lang="ts" context="module">
    import { PUBLIC_EXT_ID } from "$env/static/public";

    export const POPOVER_ID = `${PUBLIC_EXT_ID}/roll-popover`;
</script>

<script lang="ts">
    import InitiativeGraph, { type Entry } from "$lib/initiative-graph.svelte";
    import { getObr } from "$lib/obr-host.svelte";
    import type { Item } from "@owlbear-rodeo/sdk";
    import { onMount } from "svelte";


    const obr = getObr();

    onMount(async () => {
    });
    
</script>

<style lang="scss">
    .graph {
        position: fixed;
        inset: 0;
    }
</style>

<div class="component">
    <div class="graph">
    </div>
</div>