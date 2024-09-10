<script lang="ts" context="module">
    import type OBR_ from '@owlbear-rodeo/sdk/lib/index.d.ts';
    export type OBR = typeof OBR_;
</script>

<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { readable } from 'svelte/store';

    let setObr: (_: OBR) => void;
    let obr = readable(
        undefined as undefined | OBR,
        set => { setObr = set; },
    );
    setContext('obr', { obr });

    onMount(() => {
        if ($obr) return;
        (async () => {
            const { default: mod } = await import('@owlbear-rodeo/sdk');
            if (mod.isReady) {
                setObr(mod);
            } else if (mod.isAvailable) {
                mod.onReady(() => { setObr(mod); });
            } else {
                console.error('Not loaded in Owlbear!');
            }
        })();
    });
</script>

<div>
{#if $obr}
<slot />
{/if}
</div>