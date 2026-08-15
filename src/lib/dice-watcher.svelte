<script lang="ts">
    import { onMount } from "svelte";
    import { getObr, getPlayersStore } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";
    import { isRollMsg } from "./types";
    import { extractDiceItems } from "./rolls";
    import { isSupportedDieSize } from "./dice/dice-geometries";
    import { POPOVER_ID } from "../routes/(app)/dice-overlay/+page.svelte";

    const obr = getObr();
    const players = getPlayersStore();

    async function show3dDiceRoll(
        dice: Array<{ sides: number; result: number }>,
        playerId?: string,
        playerColor?: string,
    ): Promise<void> {
        const supportedDice = dice.filter(d => isSupportedDieSize(d.sides));
        if (!supportedDice.length) return;
        const diceParam = supportedDice.map(d => `${d.sides}:${d.result}`).join(',');

        const width = window.innerWidth || 1200;
        const height = window.innerHeight || 800;
        const playerQuery = playerId ? `&player=${encodeURIComponent(playerId)}` : '';
        const colorQuery = playerColor ? `&color=${encodeURIComponent(playerColor)}` : '';

        await obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/dice-overlay?dice=${encodeURIComponent(diceParam)}${playerQuery}${colorQuery}&t=${Date.now()}`,
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
            // Only trigger 3D dice overlay for rolls originating from our extension
            if (msg.data.imported) return;

            const items = msg.data.rolls.flatMap(r => extractDiceItems(r));
            if (items.length > 0) {
                const player = $players[msg.data.playerId];
                await show3dDiceRoll(items, msg.data.playerId, player?.color);
            }
        });

        return () => {
            unsub();
        };
    });
</script>
