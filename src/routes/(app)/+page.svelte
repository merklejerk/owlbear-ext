<script lang="ts">
    import { PUBLIC_PATH_PREFIX } from "$env/static/public";
    import CritWatcher from "$lib/crit-watcher.svelte";
    import ObrDiceExtHook from "$lib/obr-dice-ext-hook.svelte";
    import { getObr } from "$lib/obr-host.svelte";
    import { onMount } from "svelte";
    import { POPOVER_ID as ROLL_POPOVER_ID } from "./roll-popover/+page.svelte";
    import AnnounceWatcher from "$lib/announce-watcher.svelte";

    const obr = getObr();

    onMount(() => {
        obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/roll-popover`,
            hidePaper: true,
            width: 0,
            height: 0,
            marginThreshold: 96,
            disableClickAway: true,
            id: ROLL_POPOVER_ID,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'BOTTOM' },
        });
    });
</script>

<!-- background_url page. NOT optional, though the docs say otherwise. -->
 <ObrDiceExtHook />
 <AnnounceWatcher />
 <CritWatcher popupDelay={5000} />