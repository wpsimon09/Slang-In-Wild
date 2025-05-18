<script lang="ts">
    import type { createEmptySlangProject, ISlangProject } from "$lib/EntryData";

    const  {num, SlangProject} = $props();


</script>

<div class=" flex bg-white p-4 lg:p-2 flex-col hover:{num %2 == 0 ? "shadow-amber-500" : "shadow-cyan-300"} duration-120  rounded-2xl shadow-xl w-full   lg:mx-0 ">
    <div class="px-2 w-full flex flex-row items-center justify-between">
        <h1 class="font-chivo text-2xl font-semibold mb-2">{SlangProject.name}</h1>
    
        <div class=" h-7 w-7 lg:h-8 lg:w-8 justify-end m-2">
            <a target="_blank" rel="noopener noreferrer" class="h-full w-full " href={SlangProject.ghLink}>
                <img alt="github"  class="hover:scale-110 duration-100  h-full w-full" src="svg/github-cyan.svg">
            </a>
        </div>

    </div>
    <div class="w-1/3 ml-2  h-1  {num %2 == 0 ? " bg-amber-500" : "bg-cyan-300" } "></div>
    <div class ="mx-2 mt-4 overflow-hidden overflow-y-scroll m-2 font-chivo font-light lg:h-80 h-80  text-sm lg:text-lg">
        <p class=" font-bold">Description:</p>
        <div class=" text-lg lg:text-lg ">   
            {SlangProject.description}

        </div>
    </div>

    <p class=" ml-2 font-bold mt-2">Tags:</p>

    <div class = "w-full  h-30 gap-3 grid grid-cols-3  overflow-auto grid-rows-3">
            {#each SlangProject.tags as tag, i }
                <button  class=" justify-around {num%2 == 0 ? "bg-amber-600 text-white" : "bg-cyan-400 text-zinc-800"  } p-1 shadow-2xl rounded-2xl h-8" >{tag}</button>
            {/each}
    </div>

    
</div>