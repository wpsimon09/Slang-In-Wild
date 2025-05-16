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
    <div class ="mx-2 mt-4 overflow-hidden overflow-y-scroll m-2 font-chivo font-light lg:h-80 h-60  text-sm lg:text-lg">

        <div class=" text-lg lg:text-lg ">   
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            
        </div>
    </div>
</div>