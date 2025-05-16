<script lang="ts">
    import type { createEmptySlangProject, ISlangProject } from "$lib/EntryData";

    // svelte-ignore export_let_unused
    //export let SlangProject: ISlangProject

   const  {num} = $props();

</script>

<div class=" flex bg-white p-4 lg:p-2 flex-col   rounded-2xl   shadow-xl w-full lg:h-[70%]  lg:mx-0 ">
    <div class="w-full flex flex-row items-center justify-between">
        <h1 class="font-chivo text-2xl font-semibold mb-2">Project name</h1>
    
        <div class="flex flex-row items-center justify-end m-2">
            <img alt="github" class="h-7 w-7 lg:h-8 lg:w-8" src="svg/github-cyan.svg">
        </div>

    </div>
    <div class="w-1/3  h-2  {num %2 == 0 ? " bg-amber-500" : "bg-cyan-300" } "></div>
    <div class=" overflow-auto my-4">   
            <p class="m-2 font-chivo font-light text-sm lg:text-lg"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
</div>