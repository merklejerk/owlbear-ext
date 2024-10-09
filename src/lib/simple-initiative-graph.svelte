<script lang="ts" context="module">
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import type { Item } from "@owlbear-rodeo/sdk";
    import { wrapIndex } from "./util";

    interface Initiative {
        initiative: number;
        name: string;
        active: boolean;
    }

    interface TrackerMetadata {
        count?: string;
        active: boolean;
    }
    
    const TRACKER_METADATA_ID = 'rodeo.owlbear.initiative-tracker/metadata';
    const obr = getObr();
    let initiativesById = {} as { [id: string]: Initiative };
    let sortedIds = [] as string[];
    export let empty = true;
    let roundCount = 0;

    $: {
        sortedIds = Object
            .keys(initiativesById)
            .sort((a, b) => initiativesById[b].initiative - initiativesById[a].initiative);
    }
    
    $: empty = sortedIds.length === 0;

    onMount(() => {
        (async () => {
            const hook = async () => {
                processSceneItems(await obr.scene.items.getItems());
                obr.scene.items.onChange(items => processSceneItems(items));
            };
            if (await obr.scene.isReady()) {
                hook();
            } else {
                obr.scene.onReadyChange(rdy => {
                    if (rdy) {
                        hook();
                    }
                });
            }
        })();
    });

    function processSceneItems(items: Item[]) {
        const trackedItems = items.filter(item => item.metadata[TRACKER_METADATA_ID]);
        initiativesById = Object.assign({},
            ...trackedItems.map(item => ({
                [item.id]: {
                    initiative: Number((item.metadata[TRACKER_METADATA_ID] as TrackerMetadata)?.count) ?? 0,
                    active: !!(item.metadata[TRACKER_METADATA_ID] as TrackerMetadata).active,
                    name: (item as any).text?.plainText || item.name,
                } satisfies Initiative,
            })),
        );
    }

    async function goToNextTurn() {
        const currentIdx = sortedIds.findIndex(id => initiativesById[id].active);
        if (currentIdx === -1) return;
        const neededIds = [
            sortedIds[currentIdx],
            sortedIds[wrapIndex(currentIdx + 1, sortedIds.length)],
        ];
        await obr.scene.items.updateItems(
            it => neededIds.includes(it.id),
            items => {
                for (const it of items) {
                    it.metadata[TRACKER_METADATA_ID].active = it.id !== sortedIds[currentIdx];
                }
            },
        );
        if (currentIdx === sortedIds.length - 1) {
            ++roundCount;
        }
    }
    
    async function goToPrevTurn() {
        const currentIdx = sortedIds.findIndex(id => initiativesById[id].active);
        if (currentIdx === -1) return;
        const neededIds = [
            sortedIds[currentIdx],
            sortedIds[wrapIndex(currentIdx - 1, sortedIds.length)],
        ];
        await obr.scene.items.updateItems(
            it => neededIds.includes(it.id),
            items => {
                for (const it of items) {
                    it.metadata[TRACKER_METADATA_ID].active = it.id !== sortedIds[currentIdx];
                }
            },
        );
        if (currentIdx === 0 && roundCount > 0) {
            --roundCount;
        }
    }
</script>

<style lang="scss">

    .component {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .turns {
            flex: 1 0;

            .entry {
                overflow: hidden;
                max-width: 100%;
                text-overflow: ellipsis;
                text-wrap: nowrap;
                padding: 0.25em 0;
    
                &.active {
                    font-weight: bold;
                    animation: 0.5s alternate infinite ease-in active-glow;
                    color: color-mix(in hsl, currentColor, var(--theme-primary-color) 66%);
                }

                @keyframes active-glow {
                    0% {
                        text-shadow: 0rex 0rex 0.25rex var(--theme-secondary-color);
                    }
                    100% {
                        text-shadow: 0rex 0rex 1.25rex var(--theme-secondary-color);
                    }
                }
    
                &:not(:first-child) {
                    border-top:
                        1px
                        solid
                        color-mix(in hsl, var(--theme-text-color), transparent 80%);
                }
            }
        }

        .controls {
            display: flex;
            justify-content: space-between;

        }
    }

    .component.empty {
        display: none;
    }
</style>


<div class="component" class:empty={empty}>
    <div class="turns">
        {#each sortedIds as id, i (id)}
        {@const ini = initiativesById[id]}
        <div
            class="entry"
            class:odd={i % 2 !== 0}
            class:active={ini.active}
            title={`Initiative: ${ini.initiative}`}
            >
            {ini.name}
        </div>
        {/each}
    </div>
    <div class="controls">
        <div class="rount-count">Round: {roundCount}</div>
        <button on:click={() => goToPrevTurn()}>Last</button>
        <button on:click={() => goToNextTurn()}>Next</button>
    </div>
</div>