<script lang="ts">
    import { PUBLIC_PATH_PREFIX } from "$env/static/public";

    export let iconPath: string;
    export let title: string | null = null;
    export let noAnimate = false;
    export let fillContainer = false;
</script>

<style lang="scss">
    .component {
        background: var(--theme-text-color, currentColor);
        width: var(--icon-size);
        height: var(--icon-size);
        mask-image: var(--icon);
        mask-clip: padding-box;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        cursor: pointer;
        display: inline-block;

        &:hover {
            transform: scale(1.25);
        }

        &.no-animate:hover {
            transform: unset;
        }

        &.fill {
            width: unset;
            height: unset;
            position: absolute;
            inset: 0.5rex;
        }
    }
</style>

<button
    class="component"
    class:no-animate={noAnimate}
    class:fill={fillContainer}
    style={`--icon: url("${PUBLIC_PATH_PREFIX}/${iconPath}")`}
    on:click
    {title}
    />