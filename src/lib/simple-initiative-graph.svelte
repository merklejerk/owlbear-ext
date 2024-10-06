<script lang="ts" context="module">
    export interface Entry {
        id: string;
        name: string;
        initiative: number;
    }
</script>

<script lang="ts">
    export let entries = [] as Entry[];
    export let activeId: string | null = null;
    let activeIdx = 0;

    $: {
        if (activeId === null || entries.findIndex(e => e.id === activeId) === -1) {
            if (entries.length) {
                activeId = entries[0].id;
                activeIdx = 0;
            } else if (activeId !== null) {
                activeId = null;
                activeIdx = -1;
            }
        }
    }

    $: {
        activeIdx = entries.findIndex(e => e.id === activeId);
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
                    font-size: 1.033em;
                    font-weight: bold;
                    animation: 0.5s alternate infinite ease-in active-glow;
                    color: color-mix(in hsl, currentColor, var(--theme-primary-color) 66%);
                    // background: linear-gradient(
                    //     90deg,
                    //     color-mix(in hsl, var(--theme-text-color), transparent 100%) 50%,
                    //     color-mix(in hsl, var(--theme-text-color), transparent 90%) 100%
                    // );
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


<div class="component"
    class:empty={entries.length === 0 || !activeId}
    style={
        `--count: ${entries.length};
        --active: ${activeIdx};`}
    >
    <div class="turns">
        {#each entries as entry, i (entry.id)}
        <div
            class="entry"
            class:odd={i % 2 !== 0}
            class:active={activeId === entry.id} style={`--idx: ${i}`}
            title={`Initiative: ${entry.initiative}`}
            >
            {entry.name}
        </div>
        {/each}
    </div>
    <div class="controls">
        <div class="rount-count">Round: 0</div>
        <button>Last</button>
        <button>Next</button>
    </div>
</div>