<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";
    import { isRollMsg } from "./types";
    import { extractDiceItems } from "./rolls";
    import { POPOVER_ID } from "../routes/(app)/dice-overlay/+page.svelte";

    const obr = getObr();

    async function show3dDiceRoll(dice: Array<{ sides: number; result: number }>): Promise<void> {
        if (!dice.length) return;
        const diceParam = dice.map(d => `${d.sides}:${d.result}`).join(',');

        const width = window.innerWidth || 1200;
        const height = window.innerHeight || 800;

        await obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/dice-overlay?dice=${encodeURIComponent(diceParam)}&t=${Date.now()}`,
            id: POPOVER_ID,
            disableClickAway: true,
            hidePaper: true,
            width,
            height,
            marginThreshold: 0,
            anchorOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
            transformOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
        });
    }

    onMount(() => {
        const unsub = obr.broadcast.onMessage(PUBLIC_EXT_ID, async msg => {
            if (!isRollMsg(msg)) return;
            const items = msg.data.rolls.flatMap(r => extractDiceItems(r));
            if (items.length > 0) {
                await show3dDiceRoll(items);
            }
        });

        return () => {
            unsub();
        };
    });
</script>
