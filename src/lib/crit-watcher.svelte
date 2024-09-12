<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { delay } from "./util";
    import { CRIT_METADATA_ID, type CritMetadata } from "./types";

    interface CritEntry {
        playerName: string;
        when: number;
    }

    export let popupDelay = 5000;
    const POPOVER_ID = `${PUBLIC_EXT_ID}/crit-popover`;
    const obr = getObr();
    let critCounter = 0;
    let critStack = [] as CritEntry[];

    async function showCrits(playerNames: string[]): Promise<void> {
        const origCounter = critCounter += 1;
        await obr.popover.open({
            url: `/crit-popover?${
                new URLSearchParams({
                    players: playerNames.join(','),
                }).toString()
            }`,
            disableClickAway: true,
            hidePaper: true,
            width: 512,
            height: 512,
            marginThreshold: 0,
            id: POPOVER_ID,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
            transformOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
        });
        if (popupDelay > 0) {
            await delay(popupDelay);
            if (critCounter === origCounter) {
                await obr.popover.close(POPOVER_ID);
            }
        }
    }

    function pruneStack() {
        if (popupDelay > 0) {
            const now = Date.now();
            critStack = critStack.filter(item => now - item.when < popupDelay);
        }
    }

    onMount(() => {
        obr.room.onMetadataChange(metadata => {
            const critData = metadata[CRIT_METADATA_ID] as CritMetadata | undefined;
            if (!critData) return;
            pruneStack();
            critStack.push({
                playerName: critData.playerName,
                when: critData.when,
            });
            showCrits(critStack.map(item => item.playerName));
        });
    });
</script>

