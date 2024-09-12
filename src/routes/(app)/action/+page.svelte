<script lang="ts">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr } from "$lib/obr-host.svelte";
    import { type CritMsgData, type Roll } from "$lib/types";

    const obr = getObr();
    const rollHistory = [] as any[];

    async function runTest() {
        const playerId = 123;
        const roll: Roll[] = [
            {
                mode: 'ADD',
                rolls: [{ sides: 20, result: 20 }],
            },
        ];
        const rollQuery = new URLSearchParams({ roll: JSON.stringify(roll) }).toString();
        obr.popover.open({
            id: `${PUBLIC_EXT_ID}/roll/${playerId}?${rollQuery}`,
            url: '/roll-popover',
            width: 256,
            height: 256,
            anchorOrigin: { horizontal: 'RIGHT', vertical: 'BOTTOM' },
        });
    }

    async function runMsg() {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            { msg: 'hihi' },
            { destination: 'LOCAL' },
        );
    }

    async function runCritTest() {
        obr.broadcast.sendMessage(
            PUBLIC_EXT_ID,
            {
                topic: 'crit',
                when: Date.now(),
                playerId: crypto.randomUUID(),
                playerName: 'test',
                rollId: `test-${crypto.randomUUID()}`
            },
            { destination: 'LOCAL' },
        );
    }
</script>

<style lang="scss">

</style>

<div class="container">
    <div class="test-controls">
        <button on:click={() => runTest()}>test</button>
        <button on:click={() => runCritTest()}>crit!</button>
        <button on:click={() => runMsg()}>msg!</button>
    </div>
    <div class="roll-history">
        {#each rollHistory as roll}
        {/each}
    </div>
    <div class="roll-input">

    </div>
</div>