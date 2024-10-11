<script lang="ts" context="module">
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import { getObr } from "./obr-host.svelte";
    import type { Item } from "@owlbear-rodeo/sdk";
    import { wrapIndex } from "./util";
    import { PUBLIC_EXT_ID } from "$env/static/public";
    import IconButton from "./icon-button.svelte";
    import Icon from "./icon.svelte";

    interface Initiative {
        initiative: number;
        name: string;
        active: boolean;
        editContent?: string;
        editElem?: HTMLElement;
    }

    interface TrackerMetadata {
        count?: string;
        active: boolean;
    }
    
    const TRACKER_METADATA_ID = 'rodeo.owlbear.initiative-tracker/metadata';
    const ROUND_METADATA_ID = `${PUBLIC_EXT_ID}/round`;
    const obr = getObr();
    let initiativesById = {} as { [id: string]: Initiative };
    let sortedIds = [] as string[];
    export let empty = true;
    let roundCount = 0;
    let isEditing = false;
    
    $: {
        empty = sortedIds.length === 0;
        if (empty) roundCount = 0;
    }

    $: (async (roundCount: number) => {
        if (await obr.scene.isReady()) {
            const metadata = await obr.scene.getMetadata();
            if (metadata[ROUND_METADATA_ID] !== roundCount) {
                await obr.scene.setMetadata({
                    [ROUND_METADATA_ID]: roundCount,
                });
            }
        }
    })(roundCount);

    $: isEditing = Object.values(initiativesById).some(ini => ini.editContent !== undefined);

    onMount(() => {
        (async () => {
            const hook = async () => {
                obr.scene.getMetadata().then(processSceneMetadata);
                obr.scene.items.getItems().then(processSceneItems);
                obr.scene.items.onChange(items => processSceneItems(items));
                obr.scene.onMetadataChange(processSceneMetadata);
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

    function wrapInitiativeIndex(idx: number): number {
        return wrapIndex(idx, sortedIds.length);
    }

    function processSceneMetadata(metadata: any) {
        let roundCount_ = (metadata[ROUND_METADATA_ID] as number) ?? 0;
        if (roundCount !== roundCount_) roundCount = roundCount_;
    }

    function populateIds() {
        sortedIds = Object
            .keys(initiativesById)
            .sort((a, b) => {
                const a_ = initiativesById[a];
                const b_ = initiativesById[b];
                if (a_.initiative === b_.initiative) {
                    return a.localeCompare(b);
                }
                return b_.initiative - a_.initiative
            });
    }

    function processSceneItems(items: Item[]) {
        const trackedItems = items.filter(item => item.metadata[TRACKER_METADATA_ID]);
        const oldActiveIdx = findActiveIdx();
        initiativesById = Object.assign({},
            ...trackedItems.map(item => ({
                [item.id]: {
                    initiative: Number((item.metadata[TRACKER_METADATA_ID] as TrackerMetadata)?.count) ?? 0,
                    active: !!(item.metadata[TRACKER_METADATA_ID] as TrackerMetadata).active,
                    name: (item as any).text?.plainText || item.name,
                } satisfies Initiative,
            })),
        );
        populateIds();
        if (findActiveIdx() === -1 && sortedIds.length) {
            updateActive(oldActiveIdx, oldActiveIdx);
        }
    }

    async function updateActive(oldIdx: number, newIdx: number): Promise<void> {
        oldIdx = wrapInitiativeIndex(oldIdx);
        newIdx = wrapInitiativeIndex(newIdx);
        const neededIds = [ sortedIds[oldIdx], sortedIds[newIdx] ];
        await obr.scene.items.updateItems(
            it => neededIds.includes(it.id),
            items => {
                for (const it of items) {
                    it.metadata[TRACKER_METADATA_ID].active = it.id === sortedIds[newIdx];
                }
            },
        );
    }

    function findActiveIdx(): number {
        return sortedIds.findIndex(id => initiativesById[id].active);
    }

    async function goToNextTurn() {
        if (sortedIds.length === 0) return;
        const currentIdx = wrapInitiativeIndex(findActiveIdx());
        updateActive(currentIdx, currentIdx + 1);
        if (currentIdx === sortedIds.length - 1) {
            ++roundCount;
        }
    }
    
    async function goToPrevTurn() {
        if (sortedIds.length === 0) return;
        const currentIdx = wrapInitiativeIndex(findActiveIdx());
        updateActive(currentIdx, currentIdx - 1);
        if (currentIdx === 0 && roundCount > 0) {
            --roundCount;
        }
    }

    async function viewItem(id: string): Promise<void> {
        const bounds = await obr.scene.items.getItemBounds([id]);
        if (bounds.width === 0 || bounds.height === 0) return;
        await obr.viewport.animateToBounds(bounds);
    }
   
    function beginEditingInitiative(id: string) {
        const item = initiativesById[id]; 
        initiativesById[id].editContent = item.initiative.toString();
    }

    function cancelEditingInitiative(id: string) {
        initiativesById[id].editContent = undefined;
    }

    function initializeEditor(node: HTMLInputElement) {
        node.focus();
        node.select();
    }

    function submitInitiative(id: string) {
        const ini = initiativesById[id];
        const n = Number(ini.editContent || '0');
        if (!isNaN(n)) {
            initiativesById[id].initiative = n;
            cancelEditingInitiative(id);
            // populateIds();
            obr.scene.items.updateItems(
                it => it.id === id,
                ([it]) => {
                    const metadata = it.metadata?.[TRACKER_METADATA_ID];
                    if (metadata && Number(metadata.count) !== n) {
                        metadata.count = `${n}`;
                    }
                },
            );
            return;
        }
    }
</script>

<style lang="scss">

    .component {
        --select-color: color-mix(in hsl, var(--theme-primary-color), transparent 12.5%);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .turns {
            overflow: auto;
            flex: 1 0;

            .entry {
                padding: 0.25em 0;
                position: relative;
                
                > .content {
                    overflow: hidden;
                    display: block;
                    width: 100%;
                    text-overflow: ellipsis;
                    text-wrap: nowrap;
                }

                &.active {
                    > .content {
                        font-weight: bold;
                        animation: 0.5s alternate infinite ease-in active-glow;
                        color: color-mix(in hsl, currentColor, var(--theme-primary-color) 66%);
                    }
                }
                
                > .overlay {
                    position: absolute;
                    inset: 0;
                    background: var(--select-color);
                    display: none;
                    gap: 1.5ex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: bold;
                    padding: 0 1ex;
                    cursor: text;

                    > button.ordinal {
                        display: block;
                        background: none;
                        border: none;
                        font-weight: bold;
                        color: currentColor;
                        flex: 1 0;
                        text-align: left;
                        padding: 0;
                    }
                   
                    form > input.ordinal {
                        display: block;
                        background: none; 
                        border: none;
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        outline: none;
                        -moz-appearance: textfield;

                        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }
                    }

                    > .controls {
                        display: flex;
                        gap: 1.5ex;
                    }
                }

                &:hover {
                    > .overlay {
                        display: flex;
                    }
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

        .turns.editing {

            .entry {
                > .overlay > .controls {
                    display: none;
                }
            }

            .entry:not(.editTarget) {
                opacity: 0.5;

                > .overlay {
                    display: none;
                }
            }

            .entry.editTarget {
                > .overlay {
                    display: flex;
                }
            }
        }

        .controls {
            display: flex;
            justify-content: space-between;
            padding: 0 0.5ex;

            > .round-count {
                border: 1px solid color-mix(in hsl, var(--theme-text-color), transparent 75%);
                border-radius: 0.5ex;
                position: relative;
                --icon-size: 1em;

                > .content {
                    padding: 0.3ex;
                }

                > .overlay {
                    position: absolute;
                    inset: 0;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    background: var(--select-color);
                }

                &:hover {
                    > .overlay {
                        display: flex;
                    }
                }
            }

            > .turn-controls {
                display: flex;
                gap: 2ex;
            }
        }
    }

    .component.empty {
        display: none;
    }
</style>


<div class="component" class:empty={empty}>
    <div class="turns" class:editing={isEditing}>
        {#each sortedIds as id, i (id)}
        {@const ini = initiativesById[id]}
        <div
            class="entry"
            class:odd={i % 2 !== 0}
            class:active={ini.active}
            class:editTarget={isEditing && ini.editContent !== undefined}
            title={`Initiative: ${ini.initiative}`}
            >
            <span class="content">{ini.name}</span>
            <div class="overlay"
                >
                {#if ini.editContent !== undefined}
                <form on:submit|preventDefault={() => submitInitiative(id)}>
                    <input
                        class="ordinal"
                        bind:value={initiativesById[id].editContent}
                        bind:this={initiativesById[id].editElem}
                        use:initializeEditor
                        on:blur={() => cancelEditingInitiative(id)}
                        type="number"
                        step="0.1"
                        />
                </form>
                {:else} 
                <button
                    type="button"
                    class="ordinal"
                    on:click|preventDefault={() => beginEditingInitiative(id)}
                    >
                    {ini.initiative}
                </button>
                {/if}
                <div class="controls">
                    <IconButton title="View" iconPath="eye.svg" on:click={() => viewItem(id)} />
                </div>
            </div>
        </div>
        {/each}
    </div>
    <div class="controls">
        <div class="round-count">
            <div class="content">
                <Icon title="Round" iconPath={"checkered-flag.svg"}/> {roundCount + 1}
            </div>
            <div class="overlay">
                <IconButton
                    on:click={() => roundCount = 0}
                    title="Reset" iconPath="undo.svg"
                    noAnimate
                    fillContainer
                    />
            </div>
        </div>
        <div class="turn-controls">
            <IconButton
                on:click={() => goToPrevTurn()}
                title="Previous player"
                iconPath="backwards.svg"
                />
            <IconButton
                on:click={() => goToNextTurn()}
                title="Next player"
                iconPath="forwards.svg"
                />
        </div>
    </div>
</div>