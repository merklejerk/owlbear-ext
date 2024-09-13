<script lang="ts">
    import { page } from "$app/stores";
    import type { Roll } from "$lib/rolls";

    let rolls: Roll[] = [];

    $: {
        rolls = JSON.parse($page.params['rolls'] ?? '[]');
    }
</script>

<div>
    {#each rolls as roll}

    {/each}
</div>