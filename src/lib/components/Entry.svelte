<script lang="ts">
    import type { createEmptySlangProject, ISlangProject } from "$lib/EntryData";

    // svelte-ignore export_let_unused
    //export let SlangProject: ISlangProject

   const  {num, SlangProject} = $props();

</script>

<div class=" flex bg-white p-4 lg:p-2 flex-col   rounded-2xl shadow-xl w-full   lg:mx-0 ">
    <div class="px-2 w-full flex flex-row items-center justify-between">
        <h1 class="font-chivo text-2xl font-semibold mb-2">Project name</h1>
    
        <div class="flex flex-row  items-center justify-end m-2">
            <img alt="github" class="h-7 w-7 lg:h-8 lg:w-8" src="svg/github-cyan.svg">
        </div>

    </div>
    <div class="w-1/3 ml-2  h-1  {num %2 == 0 ? " bg-amber-500" : "bg-cyan-300" } "></div>
    <div class ="mx-2 mt-4 overflow-hidden overflow-y-scroll m-2 font-chivo font-light lg:h-80 h-80  text-sm lg:text-lg">
        <p class=" font-bold">Description:</p>
        <div class=" text-lg lg:text-lg ">   
            {SlangProject.description}

        </div>
    </div>

    <p class=" ml-2 font-bold">Tags:</p>

    <div class = "w-full gap-3 overflow-auto grid grid-cols-3 grid-rows-3">
            {#each SlangProject.tags as tag, i }
                <button  class=" justify-around {num%2 == 0 ? "bg-amber-600 text-white" : "bg-cyan-400 text-zinc-800"  } p-1 shadow-2xl rounded-2xl" >{tag}</button>
            {/each}
    </div>

    
</div>