<script lang="ts">
    import { page } from "$app/stores";
    import type { Roll } from "$lib/types";

    let rolls: Roll[] = [];

    $: {
        console.log($page.params);
    }
</script>

<div>
    {#each rolls as roll}
    {/each}
</div>