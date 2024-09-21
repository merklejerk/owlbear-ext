<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";
    import { delay } from "./util";
    import { POPOVER_ID, type RollInstanceById } from "../routes/(app)/roll-popover/+page.svelte";
    import { isRollMsg, type BroadcastMsg, type InternalMsg, type RollMsgData } from "./types";

    const obr = getObr();
    export let popupDelay = 5000;
    let popoverCounter = 0;
    const rollHistory: RollInstanceById = {};

    function pruneRollHistory() {
        const now = Date.now();
        for (const [k, v] of Object.entries(rollHistory)) {
            if (v.when + popupDelay < now) {
                delete rollHistory[k];
            }
        }
    }

    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, (e: BroadcastMsg) => {
            if (!isRollMsg(e)) return;
            const { data } = e;
            if (data.imported) return;
            rollHistory[data.rollId] = {
                playerId: data.playerId,
                rollId: data.rollId,
                rolls: data.rolls,
                when: data.when,
            };
            pruneRollHistory();
            showPopover();
        });
    });

    async function showPopover() {
        if (Object.keys(rollHistory).length === 0) return;
        const origCounter = popoverCounter += 1;
        await obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/roll-popover?${
                new URLSearchParams({
                    rolls: btoa(JSON.stringify(rollHistory)),
                }).toString()
            }`,
            hidePaper: true,
            width: 384,
            height: 128,
            marginThreshold: 96,
            disableClickAway: true,
            id: POPOVER_ID,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'BOTTOM' },
        });
        if (popupDelay > 0) {
            await delay(popupDelay);
            if (popoverCounter === origCounter) {
                await obr.popover.close(POPOVER_ID);
            }
        }
    }
</script>