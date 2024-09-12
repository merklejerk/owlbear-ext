<script lang="ts">
    import CritWatcher from "$lib/crit-watcher.svelte";
    import ObrDiceExtHook from "$lib/obr-dice-ext-hook.svelte";
</script>

<!-- background_url page. NOT optional, though the docs say otherwise. -->
 <ObrDiceExtHook />
 <CritWatcher popupDelay={5000} />