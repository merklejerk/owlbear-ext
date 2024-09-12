<script lang="ts" context="module">
    import { getContext, onDestroy } from "svelte";
    import type OBR_ from '@owlbear-rodeo/sdk';
    export type OBR = typeof OBR_;
    export const CONTEXT_KEY = 'obr' ;

    interface Context {
        obr: OBR;
        destroyed: boolean;
    }

    export function getObr(): OBR {
        const inst = getContext<Context>(CONTEXT_KEY)?.obr;
        if (!inst.isReady) {
            throw new Error(`OBR is not ready!`);
        }
        return inst;
    }
</script>

<script lang="ts">
    import { onMount, setContext } from "svelte";
    import obr from '@owlbear-rodeo/sdk'
    import { page } from "$app/stores";

    let ready = false;
    const ctx: Context = { obr, destroyed: false };
    setContext(CONTEXT_KEY, ctx);
    
    function setReady() {
        console.info(`OBR ready on ${$page.url.pathname}`);
        ready = true;
    }
    
    onMount(() => {
        if (obr.isReady) {
            setReady();
        } else if (obr.isAvailable) {
            obr.onReady(() => setReady());
        } else {
            console.warn('Not loaded in Owlbear!');
        }
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