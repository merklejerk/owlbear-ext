<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";

    const TOOL_ID = `${PUBLIC_EXT_ID}/range-finder`;
    const TOOL_MODE_ID = `${PUBLIC_EXT_ID}/range-finder/mode`;
    const obr = getObr();

    onMount(() => {
        obr.tool.create({
            id: TOOL_ID,
            icons: [
                {
                    icon: `${PUBLIC_PATH_PREFIX}/bullseye.svg`,
                    label: 'Range Finder',
                },
            ],
            defaultMode: TOOL_MODE_ID,
        });
        obr.tool.createMode({
            id: TOOL_MODE_ID,
            icons: [],
            onToolMove(ctx, e) {
                // console.log(ctx, e);
            },
            onToolDragStart(ctx, e) {
                console.log('ds', e.target);
            },
            onToolDragEnd(ctx, e) {
                console.log('de', e.target);
            },
            onToolDragMove(ctx, e) {
                console.log('dm', e.target);
            }
        });
    });
</script>