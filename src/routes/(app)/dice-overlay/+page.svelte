<script lang="ts" context="module">
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";
    export const POPOVER_ID = `${PUBLIC_EXT_ID}/dice-overlay`;
</script>
<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { getObr, getPlayersStore } from "$lib/obr-host.svelte";
    import DiceCanvas, { type RollItem } from "$lib/dice/dice-canvas.svelte";
    import { createPlayerDiceTheme, DEFAULT_THEME, type DiceTheme } from "$lib/dice/dice-texture";
    import { isSupportedDieSize } from "$lib/dice/dice-geometries";
    import { MAX_3D_DICE } from "$lib/dice/dice-physics";
    import { isRollMsg, type BroadcastMsg } from "$lib/types";
    import { extractDiceItems } from "$lib/rolls";
    import { is3dDiceEnabled } from "$lib/dice-settings";
    import { fade } from "svelte/transition";

    const obr = getObr();
    const players = getPlayersStore();

    let activeDice: RollItem[] = [];
    let activeTheme: DiceTheme = DEFAULT_THEME;
    let activeSeed: string | undefined = undefined;
    let isRolling = false;
    let unsubBroadcast: (() => void) | null = null;
    let currentWidth = 0;
    let currentHeight = 0;

    async function setPopoverSize(w: number, h: number): Promise<void> {
        if (w === currentWidth && h === currentHeight) return;
        currentWidth = w;
        currentHeight = h;
        try {
            await Promise.all([
                obr.popover.setWidth(POPOVER_ID, w),
                obr.popover.setHeight(POPOVER_ID, h),
            ]);
        } catch {
            await obr.popover.open({
                url: `${PUBLIC_PATH_PREFIX}/dice-overlay`,
                hidePaper: true,
                width: w,
                height: h,
                marginThreshold: 0,
                disableClickAway: true,
                id: POPOVER_ID,
                anchorOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
                transformOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
            });
        }
    }

    onMount(() => {
        unsubBroadcast = obr.broadcast.onMessage(PUBLIC_EXT_ID, async (msg: BroadcastMsg) => {
            if (!isRollMsg(msg)) return;
            if (msg.data.imported) return;
            if (!is3dDiceEnabled()) return;

            const items = msg.data.rolls.flatMap(r => extractDiceItems(r));
            const supportedDice = items.filter(d => isSupportedDieSize(d.sides)).slice(0, MAX_3D_DICE);
            if (!supportedDice.length) return;

            const player = $players[msg.data.playerId];
            const diceColor = msg.data.color || player?.color;
            const theme = createPlayerDiceTheme(msg.data.playerId, diceColor);

            let width = 1200;
            let height = 800;
            try {
                const [w, h] = await Promise.all([
                    obr.viewport.getWidth(),
                    obr.viewport.getHeight(),
                ]);
                if (w > 0 && h > 0) {
                    width = w;
                    height = h;
                }
            } catch {
                width = window.innerWidth || 1200;
                height = window.innerHeight || 800;
            }

            await setPopoverSize(width, height);

            activeTheme = theme;
            activeSeed = msg.data.rollId;
            activeDice = supportedDice;
            isRolling = true;
        });
    });

    onDestroy(() => {
        if (unsubBroadcast) {
            unsubBroadcast();
        }
    });

    async function handleComplete() {
        if (!isRolling) return;
        isRolling = false;
        setTimeout(async () => {
            activeDice = [];
            await setPopoverSize(0, 0);
        }, 180);
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
        cursor: default;
        pointer-events: none;
        opacity: 0;
        transition: opacity 180ms ease-out;
    }

    .overlay-container.active {
        cursor: pointer;
        pointer-events: auto;
        opacity: 1;
        transition: opacity 120ms ease-in;
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
    class="overlay-container"
    class:active={isRolling}
    on:pointerdown={handleComplete}
    on:click={handleComplete}
    on:selectstart|preventDefault
    on:dragstart|preventDefault
    role="presentation"
    >
    <DiceCanvas
        dice={activeDice}
        theme={activeTheme}
        seed={activeSeed}
        width={currentWidth}
        height={currentHeight}
        onComplete={handleComplete}
    />
</div>
