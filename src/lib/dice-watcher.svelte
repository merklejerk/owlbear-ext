<script lang="ts">
    import { onMount } from "svelte";
    import { getObr, getPlayersStore } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID, PUBLIC_PATH_PREFIX } from "$env/static/public";
    import { isRollMsg } from "./types";
    import { extractDiceItems } from "./rolls";
    import { isSupportedDieSize } from "./dice/dice-geometries";
    import { POPOVER_ID } from "../routes/(app)/dice-overlay/+page.svelte";
    import { is3dDiceEnabled } from "./dice-settings";

    import { MAX_3D_DICE } from "./dice/dice-physics";

    const obr = getObr();
    const players = getPlayersStore();

    async function show3dDiceRoll(
        dice: Array<{ sides: number; result: number }>,
        playerId?: string,
        playerColor?: string,
        rollId?: string,
    ): Promise<void> {
        if (!is3dDiceEnabled()) return;
        // Limit 3D visual dice overlay strictly to MAX_3D_DICE (e.g. 20)
        const supportedDice = dice.filter(d => isSupportedDieSize(d.sides)).slice(0, MAX_3D_DICE);
        if (!supportedDice.length) return;
        const diceParam = supportedDice.map(d => `${d.sides}:${d.result}`).join(',');

        const width = window.innerWidth || 1200;
        const height = window.innerHeight || 800;
        const playerQuery = playerId ? `&player=${encodeURIComponent(playerId)}` : '';
        const colorQuery = playerColor ? `&color=${encodeURIComponent(playerColor)}` : '';
        const rollIdQuery = rollId ? `&rollId=${encodeURIComponent(rollId)}` : '';

        await obr.popover.open({
            url: `${PUBLIC_PATH_PREFIX}/dice-overlay?dice=${encodeURIComponent(diceParam)}${playerQuery}${colorQuery}${rollIdQuery}&t=${Date.now()}`,
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
                const diceColor = msg.data.color || player?.color;
                await show3dDiceRoll(items, msg.data.playerId, diceColor, msg.data.rollId);
            }
        });

        return () => {
            unsub();
        };
    });
</script>
