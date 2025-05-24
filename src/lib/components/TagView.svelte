<script lang="ts">
    import { ETag } from "$lib/EntryData";

    //========================
    // props
    const {SlangProject, onFrontPage, tagValues} = $props();

    //========================
    // functions 

    function toggleTag(tag: ETag) {
        if (SlangProject.tags.includes(tag)) {
            SlangProject.tags = SlangProject.tags.filter((t:ETag) => t !== tag);
        } else {
            SlangProject.tags = [...SlangProject.tags, tag];
        }
    }

</script>

<div class="flex lg:grid lg:grid-cols-5  overflow-x-auto overflow-y-hidden snap-x lg:snap-y snap-mandatory w-full lg:h-25 lg:overflow-y-auto gap-3">
    {#each tagValues as tag}
        <button
            type="button"
            onclick={() => toggleTag(tag)}
            class="snap-center text-center w-full justify-items-center h-10 text-sm px-5  lg:text-md font-bold border border-zinc-400  rounded-lg lg:rounded-2xl duration-200 hover:text-white hover:bg-amber-600 hover:cursor-pointer {SlangProject.tags.includes(tag) ? 'bg-teal-700 text-white ' : 'bg-transparent text-zinc-800'}"
        >
            {tag}
        </button>
    {/each}
</div>


