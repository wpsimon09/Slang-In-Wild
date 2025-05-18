<script lang="ts">
    import { ETag } from "$lib/EntryData";

    const {SlangProject, onFrontPage, tagValues} = $props();


    
    function toggleTag(tag: ETag) {
        if (SlangProject.tags.includes(tag)) {
            SlangProject.tags = SlangProject.tags.filter((t:ETag) => t !== tag);
        } else {
            SlangProject.tags = [...SlangProject.tags, tag];
        }
        console.log(SlangProject.tags)
    }

</script>

<div class="flex flex-row overflow-auto w-full lg:grid lg:grid-cols-4 gap-3">
            {#each tagValues as tag}
                {#if onFrontPage}    
                    <button
                        type="button"
                        onclick={() => toggleTag(tag)}
                        
                        class=" text-sm px-5 lg:px-10  lg:text-md font-bold border  border-zinc-400 h-10 rounded-lg lg:rounded-2xl duration-200 hover:text-white hover:bg-amber-600 hover:cursor-pointer  {SlangProject.tags.includes(tag) ? 'bg-teal-700 text-white ' : 'bg-transparent text-zinc-800'}"
                    >
                        {tag}
                    </button>
                    {:else}
                      <button
                        type="button"
                        onclick={() => toggleTag(tag)}

                        class=" text-xs font-bold px-2 w-20 lg:px-0 border border-zinc-400 h-10 rounded-2xl duration-200 hover:text-white hover:bg-amber-600 hover:cursor-pointer  {SlangProject.tags.includes(tag) ? 'bg-teal-700 text-white' : 'bg-transparent text-zinc-800'}"
                    >
                        {tag}
                    </button>
                {/if}
            {/each}
        </div>


