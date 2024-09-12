<script lang="ts" context="module">
    import { getContext, onDestroy } from "svelte";
    import type OBR_ from '@owlbear-rodeo/sdk/lib/index.d.ts';
    export type OBR = typeof OBR_;
    export const CONTEXT_KEY = 'obr' ;

    interface Context {
        obr?: OBR;
        destroyed: boolean;
    }

    export function getObr(): OBR {
        const inst = getContext<Context>(CONTEXT_KEY)?.obr;
        if (!inst) {
            throw new Error(`OBR is not ready!`);
        }
        return inst;
    }
</script>

<script lang="ts">
    import { onMount, setContext } from "svelte";

    const ctx: Context = { obr: undefined, destroyed: false };
    let ready = false;
    setContext(CONTEXT_KEY, ctx);

    function setReady(obr: OBR) {
        console.info('OBR ready');
        ctx.obr = obr;
        ready = true;
    }

    onMount(() => {
        if (ctx.obr) return;
        (async () => {
            const { default: mod } = await import('@owlbear-rodeo/sdk');
            if (mod.isReady) {
                console.log('already ready!');
                setReady(mod);
            } else if (mod.isAvailable) {
                console.log('connecting...');
                mod.onReady(() => setReady(mod));
            } else {
                console.warn('Not loaded in Owlbear!');
            }
        })();
    });

    onDestroy(() => {
       ctx.destroyed = true;
    });
</script>

<div>
{#if ready}
<slot />
{/if}
</div>