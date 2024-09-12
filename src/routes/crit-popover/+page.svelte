<script lang="ts">
    import { page } from "$app/stores";

    const playerNames = ($page.url.searchParams.get('players') ?? '').split(',');
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

    @keyframes text {
        0% {
            translate: random(4) - 2 + px random(4) - 2 + px;
        }
        25% {
            translate: random(4) - 2 + px random(4) - 2 + px;
        }
        50% {
            translate: random(4) - 2 + px random(4) - 2 + px;
        }
        75% {
            translate: random(4) - 2 + px random(4) - 2 + px;
        }
    }

    :global(body) {
        overflow: hidden;
        position: fixed;
        inset: 0;
        display: flex;
    }
</style>
<div class="component">
    <div class="fedora"></div>
    {#each playerNames as playerName}
    <div class="text"><span class="name">{playerName}</span> rolled a critical!</div>
    {/each}
</div>