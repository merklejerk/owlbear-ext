<script lang="ts">
    import { type OBR } from "$lib/obr-host.svelte";
    import { getContext } from "svelte";
    import type { Readable } from "svelte/store";

    const { obr } = getContext<{ obr: Readable<OBR> }>('obr');

    async function runTest() {
        const players = await $obr.party.getPlayers();
        console.log(players);
        for (const p of players) {
            const rollId = Math.floor(Math.random() * (2**32 - 1)).toString();
            console.log(`setting metadata on ${p.name}...`);
            await $obr.player.setMetadata({
                ['rodeo.owlbear.dice/roll']: {
                    bonus: 0,
                    hidden: false,
                    dice: [
                        {
                            id: rollId,
                            style: "GALAXY",
                            type: "D8",
                        }
                    ]
                },
                ['rodeo.owlbear.dice/rollValues']: {
                    [rollId]: null,
                },
                ['rodeo.owlbear.dice/rollThrows']: {
                    [rollId]: {
                        "position": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                        },
                        "rotation": {
                        "x": 0,
                        "y": 0,
                        "z": 0,
                        "w": 1
                        },
                        "linearVelocity": {
                        "x": 0,
                        "y": 5.5,
                        "z": 0
                        },
                        "angularVelocity": {
                        "x": 0,
                        "y": 0,
                        "z": 0
                        }
                    }
                },
                ['rodeo.owlbear.dice/rollTransforms']: {
                    [rollId]: null,
                },
            });
        }
    }
</script>

<style lang="scss">

</style>

<div>
    <button on:click={() => runTest()}>test</button>
</div>