<script lang="ts">

    import {createEmptySlangProject, type ISlangProject, ETag } from '$lib/EntryData';
    import {fly, scale} from 'svelte/transition';
    import TagView from './TagView.svelte';

    //=================================
    // props
    const {  onCloseSubmitButton } = $props();

    //=================================
    // project that will be submitted 
    const NewSlangProject = $state(createEmptySlangProject());
    
    //================================
    // other variables
    let serializedTags = $derived(NewSlangProject.tags.toString())
    let showSelectAtLeastOneTag = $derived(NewSlangProject.tags.length === 0);
    let showMaxFlags = $derived(NewSlangProject.tags.length > 6)
    let isSubmitDissabled = $derived(showMaxFlags || showSelectAtLeastOneTag  )

</script>

<div transition:fly="{{ y: 200,delay: 10, duration: 210 }}" class="w-screen font-chivo h-full  z-50 bg-slate-100 backdrop-blur-2xl  flex items-center justify-center ">
    <form method="POST" class="bg-white md:w-[90%] rounded-xl shadow-lg  flex flex-col gap-4 w-full p-10 lg:p-8 lg:py-10 lg:w-1/3 " >
        <h1 class="text-2xl font-chivo font-semibold">Submit your project </h1>
        <p class="opacity-70 font-chivo font-light">Your project will be reviewed, so this might take a couple of days</p>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Contact email <span class="text-red-500">*</span> </span>
            <input name="email" autocomplete="email" class="border rounded p-2" type="email" bind:value={NewSlangProject.contactEmail} required />
            <p class="opacity-50">your email will be used only for the review process, then it is instanly deleted </p>
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Name <span class="text-red-500">*</span></span>
            <input name="project-name" autocomplete="on" class="border rounded p-2" type="text" bind:value={NewSlangProject.name} required />
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Author name (can be pseudonim) <span class="text-red-500">*</span></span>
            <input name="author-name" autocomplete="on" class="border rounded p-2" type="text" bind:value={NewSlangProject.authorName} required />
        </label>


        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Description <span class="text-red-500">*</span> </span>
            <textarea name="description" class="border rounded p-2" rows="3" bind:value={NewSlangProject.description} required></textarea>
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">GitHub Link <span class="text-red-500">*</span></span>
            <input name="gh-link" class="border rounded p-2 " autocomplete="on" type="url" bind:value={NewSlangProject.ghLink} required />
        </label>

        <input type="hidden" name="tags" bind:value={serializedTags}>

        <span class="mb-1 font-semibold">Choose your tags:<span class="text-red-500">*</span></span>

        {#if showSelectAtLeastOneTag}
            <p class="text-red-500 ">Select at least one tag, thank you</p>
        {/if}
        {#if showMaxFlags}
            <p class="text-red-500 ">Max flag count is 6, sorry</p>
        {/if}
        <div class="w-full overflow-auto">
            <TagView SlangProject={NewSlangProject} onFrontPage = {false} tagValues={Object.values(ETag)}/>
        </div>

    

        <div class="flex items-center w-full gap-2 mt-4">
            <button onclick={onCloseSubmitButton} type="button" class="w-1/2 text-white duration-200  hover:cursor-pointer hover:bg-teal-700 p-2 rounded-lg shadow-xl bg-amber-600">
                Close
            </button>
            <button disabled={isSubmitDissabled} type="submit" class="{isSubmitDissabled ? "opacity-40" : ""} w-1/2 text-white duration-200  hover:cursor-pointer hover:bg-teal-700 p-2 rounded-lg shadow-xl bg-amber-600">
                Submit
            </button>
        </div>
    </form>
</div>
