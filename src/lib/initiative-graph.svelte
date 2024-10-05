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

        .pie {
            --gap: 0.25ex;
            width: 100%;
            height: 100%;
            position: relative;
            background: blueviolet;
            clip-path: circle(50% at center);
    
            .entry {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: lightblue;

                &.active {
                    color: red;
                }
            }
    
            &.multi {
                --a: calc(360deg / var(--count));
                --h: calc(tan(var(--a) / 2));
                // transform: rotate(calc(-90deg + var(--idx) *var(--a)));
    
                .entry {
                    inset:
                        calc((1 - var(--h)) * 50% + var(--gap))
                        0
                        calc((1 - var(--h)) * 50% + var(--gap))
                        calc(50% + var(--gap));
                    clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
                    transform: rotate(calc(var(--a) * var(--idx)));
                    transform-origin: calc(0% - var(--gap)) 50%;
                }
            }
    
            &.two .entry {
                inset:
                    calc(var(--idx) * (50% + var(--gap) / 2))
                    0
                    calc((1 - var(--idx)) * (50% + var(--gap) / 2))
                    0;
            }
    
            &.one .entry {
                inset: 0;
            }
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
    <div
        class="pie"
        class:one={entries.length === 1}
        class:two={entries.length === 2}
        class:multi={entries.length > 2}
        >
        {#each entries as entry, i (entry.id)}
        <div class="entry" class:active={activeId === entry.id} style={`--idx: ${i}`}>
            {entry.name}
            <span class="initiative">{entry.initiative}</span>
        </div>
        {/each}
    </div>
</div>