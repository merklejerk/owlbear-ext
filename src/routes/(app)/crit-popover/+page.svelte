<script lang="ts" context="module">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    export const POPOVER_ID = `${PUBLIC_EXT_ID}/crit-popover`;
</script>

<script lang="ts">
    import { page } from "$app/stores";
    import { getObr } from "$lib/obr-host.svelte";

    const playerNames = ($page.url.searchParams.get('players') ?? '').split(',');
    const obr = getObr();

    function clicked() {
        obr.popover.close(POPOVER_ID);
    }
</script>

<style lang="scss">
    .component {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        flex: 1 0;

        .fedora {
            position: absolute;
            background: url('/fedora.gif');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            width: 100%;
            height: 100%;
            z-index: -1;
            animation: spin-in 0.2s cubic-bezier(.43,.89,.86,1.22) none;
            transform-origin: center;

            @keyframes spin-in {
                0% {
                    rotate: -180deg;
                    scale: 50%;
                }
                100% {
                    rotate: 0deg;
                    scale: 100%;
                }
            }
        }

        .text {
            font-size: 2em;
            font-weight: bold;
            text-shadow: 0 0 10px black;
            color: white;
            animation: text 0.15s linear infinite alternate;

            .name {
                font-size: 1.25em;
                color: yellow;
            }
        }
    }

    @function jitter($px) {
        @return (calc(random($px) - $px / 2) + px) (calc(random($px) - $px / 2) + px);
    }
    
    @keyframes text {
        0% {
            translate: jitter(7);
        }
        25% {
            translate: jitter(7);
        }
        50% {
            translate: jitter(7);
        }
        75% {
            translate: jitter(7);
        }
    }

    :global(body) {
        overflow: hidden;
        position: fixed;
        inset: 0;
        display: flex;
        user-select: none;
    }
</style>
<div class="component" on:click={() => clicked()}>
    <div class="fedora"></div>
    {#each playerNames as playerName}
    <div class="text"><span class="name">{playerName}</span> rolled a critical!</div>
    {/each}
</div>