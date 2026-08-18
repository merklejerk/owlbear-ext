<script lang="ts">
    import { PUBLIC_PATH_PREFIX } from "$env/static/public";
    import CritWatcher from "$lib/crit-watcher.svelte";
    import ObrDiceExtHook from "$lib/obr-dice-ext-hook.svelte";
    import { getObr } from "$lib/obr-host.svelte";
    import { onMount } from "svelte";
    import { POPOVER_ID as DICE_OVERLAY_POPOVER_ID } from "./dice-overlay/+page.svelte";
    import AnnounceWatcher from "$lib/announce-watcher.svelte";
    import InitiativeWatcher from "$lib/initiative-watcher.svelte";

    const obr = getObr();

    onMount(async () => {
        await obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/dice-overlay`,
            hidePaper: true,
            width: 0,
            height: 0,
            marginThreshold: 0,
            disableClickAway: true,
            id: DICE_OVERLAY_POPOVER_ID,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
            transformOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
        });
    });
</script>

<!-- background_url page. NOT optional, though the docs say otherwise. -->
 <ObrDiceExtHook />
 <AnnounceWatcher />
 <CritWatcher popupDelay={3800} />
 <InitiativeWatcher />