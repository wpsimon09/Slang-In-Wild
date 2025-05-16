<script lang="ts">
    import { ETag } from "$lib/EntryData";

    const {SlangProject, isSelectable} = $props();


    let tagValues = $state(Object.values(ETag));
    
    function toggleTag(tag: ETag) {
        if (SlangProject.tags.includes(tag)) {
            SlangProject.tags = SlangProject.tags.filter((t:ETag) => t !== tag);
        } else {
            SlangProject.tags = [...SlangProject.tags, tag];
        }
        console.log(SlangProject.tags)
    }

</script>

<div class="grid grid-cols-4 gap-2">
            {#each tagValues as tag}
                {#if isSelectable}    
                    <button
                        type="button"
                        onclick={() => toggleTag(tag)}
                        class="   text-xs font-bold border border-zinc-400 h-10 rounded-2xl duration-200 hover:text-white hover:bg-amber-600 hover:cursor-pointer  {SlangProject.tags.includes(tag) ? 'bg-cyan-300 text-zinc-800' : 'bg-transparent text-zinc-800'}"
                    >
                        {tag}
                    </button>
                    {:else}
                      <button
                        type="button"
                        class="text-xs font-bold border border-zinc-400 h-10 rounded-2xl duration-200 hover:text-white hover:bg-amber-600 hover:cursor-pointer  {SlangProject.tags.includes(tag) ? 'bg-cyan-300 text-zinc-800' : 'bg-transparent text-zinc-800'}"
                    >
                        {tag}
                    </button>
                {/if}
            {/each}
        </div>


