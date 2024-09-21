<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";
    import { POPOVER_ID, type RollInstanceById } from "../routes/(app)/roll-popover/+page.svelte";
    import { isRollMsg, type BroadcastMsg, type InternalMsg, type RollMsgData } from "./types";

    const obr = getObr();

    onMount(() => {
        obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/roll-popover`,
            hidePaper: true,
            width: 0,
            height: 0,
            marginThreshold: 96,
            disableClickAway: true,
            id: POPOVER_ID,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'BOTTOM' },
        });
    });
</script>