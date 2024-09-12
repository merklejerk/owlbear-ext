<script lang="ts" context="module">
    import { EventEmitter } from 'events';
    import { getContext } from "svelte";
    export type Context = EventEmitter;
    export const CONTEXT_KEY = 'message-bus';

    export function getMessageBus(): EventEmitter {
        return getContext<Context>(CONTEXT_KEY);
    }
</script>

<script lang="ts">
    import { setContext } from "svelte";
    const emitter = new EventEmitter();
    setContext(CONTEXT_KEY, emitter);
</script>

<slot />