<script lang="ts" context="module">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    export const POPOVER_ID = `${PUBLIC_EXT_ID}/dice-overlay`;
</script>

<script lang="ts">
    import { page } from "$app/stores";
    import { getObr } from "$lib/obr-host.svelte";
    import DiceCanvas, { type RollItem } from "$lib/dice/dice-canvas.svelte";
    import { createPlayerDiceTheme } from "$lib/dice/dice-texture";
    import { fade } from "svelte/transition";

    const obr = getObr();
    const rawDiceParam = $page.url.searchParams.get('dice') ?? '20:20';
    const playerParam = $page.url.searchParams.get('player');
    const colorParam = $page.url.searchParams.get('color');

    const playerTheme = createPlayerDiceTheme(playerParam, colorParam);

    function parseDiceParam(param: string): RollItem[] {
        try {
            return param.split(',').map(part => {
                const [s, r] = part.split(':').map(Number);
                return {
                    sides: isNaN(s) ? 20 : s,
                    result: isNaN(r) ? 20 : r,
                };
            }).filter(d => d.sides > 0);
        } catch {
            return [{ sides: 20, result: 20 }];
        }
    }

    const diceList = parseDiceParam(rawDiceParam);
    let visible = true;

    async function handleComplete() {
        if (!visible) return;
        visible = false;
        setTimeout(async () => {
            try {
                await obr.popover.close(POPOVER_ID);
            } catch {}
        }, 250);
    }
</script>

<style>
    :global(html, body) {
        background: transparent !important;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -webkit-tap-highlight-color: transparent !important;
        outline: none !important;
    }

    :global(*) {
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -webkit-tap-highlight-color: transparent !important;
        outline: none !important;
    }

    .overlay-container {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-tap-highlight-color: transparent !important;
        outline: none !important;
        cursor: pointer;
    }

    .overlay-container:focus,
    .overlay-container:focus-visible,
    .overlay-container:active {
        outline: none !important;
        box-shadow: none !important;
    }

    :global(canvas) {
        outline: none !important;
        -webkit-user-select: none !important;
        user-select: none !important;
    }
</style>

{#if visible}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
    class="overlay-container"
    out:fade={{ duration: 200 }}
    on:pointerdown={handleComplete}
    on:click={handleComplete}
    on:selectstart|preventDefault
    on:dragstart|preventDefault
    role="presentation"
    >
    <DiceCanvas dice={diceList} theme={playerTheme} onComplete={handleComplete} />
</div>
{/if}
