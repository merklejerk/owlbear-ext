<script lang="ts">
    import CritWatcher from "$lib/crit-watcher.svelte";
    import ObrDiceExtHook from "$lib/obr-dice-ext-hook.svelte";
    import RollWatcher from "$lib/roll-watcher.svelte";
</script>

<!-- background_url page. NOT optional, though the docs say otherwise. -->
 <ObrDiceExtHook />
 <RollWatcher />
 <CritWatcher popupDelay={5000} />