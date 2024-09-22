<script lang="ts">
    import { onMount } from "svelte";
    import { getObr, getPlayersStore } from "./obr-host.svelte";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { isAnnounceMsg } from "./types";

    const obr = getObr();
    const players = getPlayersStore();

    onMount(() => {
        obr.broadcast.onMessage(PUBLIC_EXT_ID, msg => {
            if (!isAnnounceMsg(msg)) return;
            const { data } = msg;
            obr.notification.show(`${$players[data.playerId].name}: "${data.msg}"`);
        });
    });
</script>