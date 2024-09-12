<script lang="ts">
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import { getObr } from "$lib/obr-host.svelte";
    import type { Roll } from "$lib/types";

    const obr = getObr();

    async function runTest() {
        const playerId = 123;
        const roll: Roll[] = [
            {
                combination: 'ADD',
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
</script>

<style lang="scss">

</style>

<div>
    <button on:click={() => runTest()}>test</button>
</div>