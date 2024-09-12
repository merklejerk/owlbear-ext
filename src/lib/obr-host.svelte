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

    function tryToBootstrap() {
        const rdy = (window as any).__obr_ready as { origin: string; userId: string; ref: string; } | undefined;
        if (!rdy) return;
        const bus = (obr.broadcast as any).messageBus as any;
        bus.handleMessage({
            origin: rdy.origin,
            data: {
                id: 'OBR_READY',
                data: {
                    userId: rdy.userId,
                    ref: rdy.ref,
                },
            },
        });
    }
    
    onMount(() => {
        if (obr.isReady) {
            setReady();
        } else if (obr.isAvailable) {
            obr.onReady(() => setReady());
            tryToBootstrap();
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