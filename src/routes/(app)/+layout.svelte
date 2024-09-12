<script lang="ts">
    import MessageBus from "$lib/message-bus.svelte";
    import ObrHost from "$lib/obr-host.svelte";
</script>

<div>
    <MessageBus>
        <ObrHost><slot /></ObrHost>    
    </MessageBus>
</div>