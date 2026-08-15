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
    import type { TrackerMetadata } from "./types";

    interface Initiative {
        initiative: number;
        name: string;
        active: boolean;
    }
    
    const TRACKER_METADATA_ID = 'rodeo.owlbear.initiative-tracker/metadata';
    const ROUND_METADATA_ID = `${PUBLIC_EXT_ID}/round`;
    const obr = getObr();
    let initiativesById = {} as { [id: string]: Initiative };
    let sortedIds = [] as string[];
    export let empty = true;
    let roundCount = 0;
    let editingId: string | null = null;
    let editDraftValue = '';
    const entryElems = new Map<string, HTMLElement>();
    
    $: empty = sortedIds.length === 0;
    $: isEditing = editingId !== null;

    onMount(() => {
        let unsubscribers: Array<() => void> = [];

        const teardownScene = () => {
            for (const unsub of unsubscribers) {
                unsub();
            }
            unsubscribers = [];
        };

        const setupScene = () => {
            teardownScene();
            obr.scene.getMetadata().then(processSceneMetadata);
            obr.scene.items.getItems().then(processSceneItems);
            unsubscribers.push(
                obr.scene.items.onChange(items => processSceneItems(items)),
                obr.scene.onMetadataChange(processSceneMetadata),
            );
        };

        const unsubReady = obr.scene.onReadyChange(rdy => {
            if (rdy) {
                setupScene();
            } else {
                teardownScene();
            }
        });

        obr.scene.isReady().then(rdy => {
            if (rdy) setupScene();
        });

        return () => {
            teardownScene();
            unsubReady();
        };
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
                return b_.initiative - a_.initiative;
            });
    }

    function initializeEntry(node: HTMLElement, id: string) {
        entryElems.set(id, node);
        return {
            destroy() {
                entryElems.delete(id);
            },
        };
    }

    function scrollToId(id: string) {
        if (isEditing) return;
        const entryElem = entryElems.get(id);
        if (entryElem) {
            const p = entryElem.parentElement;
            if (!p) return;
            const bounds = entryElem.getBoundingClientRect();
            const scroll = {
                top: p.scrollTop,
                bottom: p.scrollTop + p.scrollHeight,
                height: p.scrollHeight,
            };
            if (scroll.top > bounds.top || scroll.bottom < bounds.bottom) {
                p.scrollTo(0, bounds.top);
            }
        }
    }

    async function processSceneItems(items: Item[]) {
        const trackedItems = items.filter(item => item.metadata[TRACKER_METADATA_ID]);
        const oldActiveId = sortedIds[findActiveIdx()];

        initiativesById = Object.fromEntries(
            trackedItems.map(item => [
                item.id,
                {
                    initiative: Number((item.metadata[TRACKER_METADATA_ID] as TrackerMetadata)?.count) ?? 0,
                    active: !!(item.metadata[TRACKER_METADATA_ID] as TrackerMetadata).active,
                    name: (item as any).text?.plainText || item.name,
                } satisfies Initiative,
            ]),
        );
        populateIds();

        if (editingId && !initiativesById[editingId]) {
            cancelEditingInitiative(editingId);
        }

        let newActiveIdx = findActiveIdx();
        if (newActiveIdx === -1 && sortedIds.length) {
            const fallbackIdx = oldActiveId ? sortedIds.indexOf(oldActiveId) : -1;
            newActiveIdx = await updateActive(fallbackIdx !== -1 ? fallbackIdx : 0);
        }
        const activeId = sortedIds[findActiveIdx()];
        if (activeId && activeId !== oldActiveId) {
            scrollToId(activeId);
        }
    }

    async function updateActive(newIdx: number): Promise<number> {
        newIdx = wrapInitiativeIndex(newIdx);
        await obr.scene.items.updateItems(
            sortedIds,
            items => {
                for (const it of items) {
                    const metadata = it.metadata[TRACKER_METADATA_ID] as TrackerMetadata;
                    metadata.active = it.id === sortedIds[newIdx];
                }
            },
        );
        return newIdx;
    }

    function findActiveIdx(): number {
        return sortedIds.findIndex(id => initiativesById[id]?.active);
    }

    async function setSceneRoundCount(newRound: number): Promise<void> {
        if (await obr.scene.isReady()) {
            await obr.scene.setMetadata({
                [ROUND_METADATA_ID]: Math.max(0, newRound),
            });
        }
    }

    async function goToNextTurn() {
        if (sortedIds.length === 0) return;
        const currentIdx = wrapInitiativeIndex(findActiveIdx());
        await updateActive(currentIdx + 1);
        if (currentIdx === sortedIds.length - 1) {
            await setSceneRoundCount(roundCount + 1);
        }
    }
    
    async function goToPrevTurn() {
        if (sortedIds.length === 0) return;
        const currentIdx = wrapInitiativeIndex(findActiveIdx());
        await updateActive(currentIdx - 1);
        if (currentIdx === 0 && roundCount > 0) {
            await setSceneRoundCount(roundCount - 1);
        }
    }

    async function viewItem(id: string): Promise<void> {
        const bounds = await obr.scene.items.getItemBounds([id]);
        if (bounds.width === 0 || bounds.height === 0) return;
        bounds.min = {
            x: bounds.center.x - bounds.width,
            y: bounds.center.y - bounds.height,
        };
        bounds.max = {
            x: bounds.center.x + bounds.width,
            y: bounds.center.y + bounds.height,
        };
        bounds.height *= 2;
        bounds.width *= 2;
        await obr.viewport.animateToBounds(bounds);
    }
   
    function beginEditingInitiative(id: string) {
        const item = initiativesById[id];
        if (!item) return;
        editingId = id;
        editDraftValue = item.initiative.toString();
    }

    function cancelEditingInitiative(id: string) {
        if (editingId === id) {
            editingId = null;
            editDraftValue = '';
        }
    }

    function initializeEditor(node: HTMLInputElement) {
        node.focus();
        node.select();
    }

    async function submitInitiative(id: string) {
        if (editingId !== id) return;
        const targetId = editingId;
        const raw = editDraftValue.trim();
        editingId = null;
        editDraftValue = '';

        const n = Number(raw || '0');
        if (!isNaN(n)) {
            if (initiativesById[targetId]) {
                initiativesById[targetId].initiative = n;
                populateIds();
            }
            await obr.scene.items.updateItems(
                [targetId],
                ([it]) => {
                    const metadata = it?.metadata?.[TRACKER_METADATA_ID] as TrackerMetadata | undefined;
                    if (metadata && Number(metadata.count) !== n) {
                        metadata.count = `${n}`;
                    }
                },
            );
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
            overflow: hidden auto;
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
                        user-select: none;
                        cursor: inherit;
                    }
                   
                    form > input.ordinal {
                        display: block;
                        background: none; 
                        border: none;
                        padding: 0;
                        margin: 0;
                        width: 100%;
                        outline: none;
                        color: inherit; 
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
                    user-select: none; 
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
            class:active={ini?.active}
            class:editTarget={editingId === id}
            use:initializeEntry={id}
            title={`Initiative: ${ini?.initiative ?? 0}`}
            >
            <span class="content">{ini?.name ?? ''}</span>
            <div class="overlay">
                {#if editingId === id}
                <form on:submit|preventDefault={() => submitInitiative(id)}>
                    <input
                        class="ordinal"
                        bind:value={editDraftValue}
                        use:initializeEditor
                        on:blur={() => submitInitiative(id)}
                        on:keydown={(e) => {
                            if (e.code === 'Escape') {
                                e.preventDefault();
                                cancelEditingInitiative(id);
                            }
                        }}
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
                    {ini?.initiative ?? 0}
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
                    on:click={() => setSceneRoundCount(0)}
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