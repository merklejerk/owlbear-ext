<script lang="ts" context="module">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    export const POPOVER_ID = `${PUBLIC_EXT_ID}/crit-popover`;
</script>

<script lang="ts">
    import { page } from "$app/stores";
    import { getObr } from "$lib/obr-host.svelte";

    const playerNames = ($page.url.searchParams.get('players') ?? '').split(',').filter(Boolean);
    const side = ($page.url.searchParams.get('side') ?? 'RIGHT').toUpperCase();
    const isLeft = side === 'LEFT';
    const obr = getObr();

    function dismiss() {
        obr.popover.close(POPOVER_ID);
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
            dismiss();
        }
    }
</script>

<style lang="scss">
    :global(body) {
        overflow: hidden;
        position: fixed;
        inset: 0;
        display: flex;
        user-select: none;
        background: transparent !important;
    }

    .toasty-container {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
        -webkit-tap-highlight-color: transparent;

        &.side-right {
            align-items: flex-end;
            animation: toasty-slide-right 3.6s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
            transform-origin: bottom right;
        }

        &.side-left {
            align-items: flex-start;
            animation: toasty-slide-left 3.6s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
            transform-origin: bottom left;
        }
    }

    .toasty-wrapper {
        position: relative;
        width: 380px;
        height: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
    }

    .fedora {
        position: absolute;
        inset: 0;
        background: url('/fedora.gif') center no-repeat;
        background-size: contain;
        z-index: 1;
        transform-origin: center bottom;
        filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.75));

        .side-right & {
            transform: rotate(-10deg);
        }

        .side-left & {
            transform: scaleX(-1) rotate(10deg);
        }
    }

    .speech-bubble {
        position: relative;
        z-index: 2;
        margin-top: auto;
        margin-bottom: 28px;
        padding: 8px 18px;
        background: rgba(18, 18, 22, 0.94);
        border: 2.5px solid #ffd54f;
        border-radius: 14px;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.85), 0 0 16px rgba(255, 213, 79, 0.45);
        text-align: center;
        transform: rotate(-3deg);
        animation: text-pulse 0.22s linear infinite alternate;

        .side-left & {
            transform: rotate(3deg);
        }
    }

    .text {
        font-family: 'Inter', -apple-system, sans-serif;
        font-size: 1.45em;
        font-weight: 900;
        font-style: italic;
        text-transform: uppercase;
        color: #ffffff;
        letter-spacing: -0.01em;
        white-space: nowrap;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.95);

        .name {
            color: #ffd54f;
            text-shadow: 0 0 10px rgba(255, 213, 79, 0.75);
        }

        .crit-tag {
            color: #ff4757;
            text-shadow: 0 0 10px rgba(255, 71, 87, 0.75);
        }
    }

    @keyframes toasty-slide-right {
        0% {
            transform: translate(110%, 110%) scale(0.6);
            opacity: 0;
        }
        10% {
            transform: translate(-3%, -3%) scale(1.04);
            opacity: 1;
        }
        14% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        86% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        90% {
            transform: translate(-3%, -3%) scale(1.04);
            opacity: 1;
        }
        100% {
            transform: translate(115%, 115%) scale(0.6);
            opacity: 0;
        }
    }

    @keyframes toasty-slide-left {
        0% {
            transform: translate(-110%, 110%) scale(0.6);
            opacity: 0;
        }
        10% {
            transform: translate(3%, -3%) scale(1.04);
            opacity: 1;
        }
        14% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        86% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        90% {
            transform: translate(3%, -3%) scale(1.04);
            opacity: 1;
        }
        100% {
            transform: translate(-115%, 115%) scale(0.6);
            opacity: 0;
        }
    }

    @keyframes text-pulse {
        0% {
            transform: scale(0.98);
        }
        100% {
            transform: scale(1.02);
        }
    }
</style>

<button
    type="button"
    class="toasty-container"
    class:side-right={!isLeft}
    class:side-left={isLeft}
    on:click={dismiss}
    on:keydown={handleKeydown}
    aria-label="Dismiss critical roll notification"
>
    <div class="toasty-wrapper">
        <div class="fedora"></div>
        <div class="speech-bubble">
            {#each playerNames as playerName}
                <div class="text">
                    <span class="name">{playerName}</span> rolled a <span class="crit-tag">critical!</span>
                </div>
            {/each}
        </div>
    </div>
</button>