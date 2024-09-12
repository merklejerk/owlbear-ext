<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { getMessageBus } from "./message-bus.svelte";
    import { PUBLIC_EXT_ID } from "$env/static/public";

    const obr = getObr();
    const bus  = getMessageBus();

    async function onCrit(playerId: string): Promise<void> {
        obr.popover.open({
            url: '/crit-popover',
            // hidePaper: true,
            width: 256,
            height: 256,
            id: `${PUBLIC_EXT_ID}/crit-popover`,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
        });
        console.log(playerId, 'critted!');
    }

    onMount(() => {
        bus.addListener('crit', playerId => {
            onCrit(playerId);
        });
    });
</script>

