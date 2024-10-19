<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";

    const obr = getObr();
    let ready = false;

    onMount(async () => {
        obr.scene.isReady().then(rdy => ready = rdy);
        obr.scene.onReadyChange(rdy => {
            ready = rdy;
        });
    });
</script>

<div class="component">
    {#if ready}
    <slot />
    {/if}
</div>