<script lang="ts">
    import { PUBLIC_PATH_PREFIX } from "$env/static/public";

    export let iconPath: string;
    export let title: string | null = null;
</script>

<style lang="scss">
    .component {
        width: var(--icon-size);
        height: var(--icon-size);
        background: var(--theme-text-color, currentColor);
        mask-image: var(--icon);
        mask-repeat: no-repeat;
        mask-clip: padding-box;
        display: inline-block;
    }
</style>

<div
    class="component"
    style={`--icon: url("${PUBLIC_PATH_PREFIX}/${iconPath}")`}
    {title}
    />