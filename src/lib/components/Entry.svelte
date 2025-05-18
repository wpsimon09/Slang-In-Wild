<script lang="ts">
    import type { createEmptySlangProject, ISlangProject } from "$lib/EntryData";
	import { scale } from 'svelte/transition';
	import { expoInOut } from 'svelte/easing';
    const  {num, SlangProject} = $props();


</script>

<div transition:scale={{duration: 220, easing: expoInOut}}  class=" flex bg-white p-4 lg:p-2 flex-col  duration-120  rounded-2xl shadow-xl w-full   lg:mx-0 ">
    <div class="px-2 w-full flex flex-row items-center justify-between">
        <h1 class="font-chivo text-2xl font-semibold mb-2">{SlangProject.name}</h1>
    
        <div class=" h-7 w-7 lg:h-8 lg:w-8 justify-end m-2">
            <a target="_blank" rel="noopener noreferrer" class="h-full w-full " href={SlangProject.ghLink}>
                <img alt="github"  class="hover:scale-110 duration-100  h-full w-full" src="svg/github-cyan.svg">
            </a>
        </div>

    </div>
    <div class="w-1/3 ml-2  h-1  {num %2 == 0 ? " bg-amber-500" : "bg-teal-700" } "></div>
    <div class ="mx-2 mt-4 overflow-hidden overflow-y-scroll m-2 font-chivo font-light lg:h-80 h-80  text-sm lg:text-lg">
        <p class=" font-bold">Description:</p>
        <div class="text-md lg:text-lg ">   
            {SlangProject.description}
        </div>
    </div>

    <p class=" ml-2 font-bold mt-2">Tags:</p>

    <div class = "w-full  h-30 gap-3 grid grid-cols-3  overflow-auto grid-rows-3">
            {#each SlangProject.tags as tag, i }
                <button  class=" justify-around {num%2 == 0 ? "bg-amber-600 text-white" : " bg-teal-700 text-white"  } p-1 shadow-md rounded-2xl h-8" >{tag}</button>
            {/each}
    </div>

    
</div>