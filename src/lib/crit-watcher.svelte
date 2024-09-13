<script lang="ts">
    import { onMount } from "svelte";
    import { getObr, getPlayersStore } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { delay } from "./util";
    import { isRollMsg } from "./types";
    import { isCriticalRoll } from "./rolls";

    interface CritCache {
        [rollId: string]: {
            playerId: string;
            playerName: string;
            when: number;
        };
    }

    export let popupDelay = 5000;
    const POPOVER_ID = `${PUBLIC_EXT_ID}/crit-popover`;
    const obr = getObr();
    const players = getPlayersStore();
    let critCounter = 0;
    const critCache = {} as CritCache;

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

    function pruneCache() {
        if (popupDelay > 0) {
            const now = Date.now();
            for (const rollId in critCache) {
                const crit = critCache[rollId];
                if (now - crit.when > popupDelay) {
                    delete critCache[rollId];
                }
            }
        }
    }

    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, msg => {
            if (!isRollMsg(msg)) return;
            const { data } = msg;
            if (popupDelay > 0 && Date.now() - data.when > popupDelay) return;
            if (data.rollId in critCache) return;
            if (!data.rolls.some(r => isCriticalRoll(r))) return;
            critCache[data.rollId] = {
                playerName: $players[data.playerId]?.name ?? '?',
                playerId: data.playerId,
                when: data.when,
            };
            pruneCache();
            if (Object.keys(critCache).length === 0) {
                return;
            }
            showCrits(Object.values(critCache).map(item => item.playerName));
        });
    });
</script>

