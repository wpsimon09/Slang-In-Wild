<script lang="ts">
    import type { createEmptySlangProject, ISlangProject } from "$lib/EntryData";

    // svelte-ignore export_let_unused
    //export let SlangProject: ISlangProject

   const  {num} = $props();

</script>

<div class=" flex bg-white p-2 flex-col  rounded-2xl items-center  shadow-xl w-full lg:h-[70%]  lg:mx-0 ">
    <h1 class=" text-2xl font-bold mb-2">Project name</h1>
    <div class="w-2/3  h-1  {num %2 == 0 ? " bg-amber-500" : "bg-cyan-300" } "></div>
    <div class=" overflow-auto">   
            <p class="m-2 text-sm lg:text-lg"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
    <div class="flex flex-row items-center justify-start m-2">
        <img alt="github" class="h-7 w-7 lg:h-10 lg:w-10" src="svg/github-cyan.svg">
    </div>
</div>