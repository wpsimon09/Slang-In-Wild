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
    let showSelectAtLeastOneTag = $state(false);
    let showMaxFlags = $derived(NewSlangProject.tags.length > 6)

    //=================================
    // make post request
    async function handleSubmit(event: Event){
        if(NewSlangProject.tags.length >0){
            showSelectAtLeastOneTag = false;
            event.preventDefault();
            onCloseSubmitButton();
    
             const response = await fetch('/', {
                method: 'POST',
                body: JSON.stringify({ NewSlangProject }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }else{
            showSelectAtLeastOneTag = true;
        }
    }


</script>

<div transition:fly="{{ y: 200,delay: 50, duration: 210 }}" class="w-screen font-chivo h-screen z-50 bg-slate-100 backdrop-blur-2xl  flex items-center justify-center ">
    <form class="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 w-full max-w-md" onsubmit={handleSubmit}>
        <h1 class="text-2xl font-chivo font-semibold">Submit your project </h1>
        <p class="opacity-70 font-chivo font-light">Your project will be reviewed, so this might take a couple of days</p>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Contact email <span class="text-red-500">*</span> </span>
            <input autocomplete="email" class="border rounded p-2" type="email" bind:value={NewSlangProject.contactEmail} required />
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Name <span class="text-red-500">*</span></span>
            <input autocomplete="on" class="border rounded p-2" type="text" bind:value={NewSlangProject.name} required />
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Author name (can be pseudonim) <span class="text-red-500">*</span></span>
            <input autocomplete="on" class="border rounded p-2" type="text" bind:value={NewSlangProject.authorName} required />
        </label>


        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Description <span class="text-red-500">*</span> </span>
            <textarea class="border rounded p-2" rows="3" bind:value={NewSlangProject.description} required></textarea>
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">GitHub Link <span class="text-red-500">*</span></span>
            <input class="border rounded p-2 " autocomplete="on" type="url" bind:value={NewSlangProject.ghLink} required />
        </label>

        <span class="mb-1 font-semibold">Choose your tags:<span class="text-red-500">*</span></span>

        {#if showSelectAtLeastOneTag}
            <p class="text-red-500 ">Select at least one tag, thank you</p>
        {/if}
        {#if showMaxFlags}
            <p class="text-red-500 ">Max flags is 6</p>
        {/if}
        <TagView SlangProject={NewSlangProject} onFrontPage = {false} tagValues={Object.values(ETag)}/>

        <div class="flex items-center w-full gap-2 mt-4">
            <button onclick={onCloseSubmitButton} type="button" class="w-1/2 text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-teal-700 p-2 rounded-lg shadow-xl bg-amber-600">
                Close
            </button>
            <button type="submit" class="w-1/2 text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-teal-700 p-2 rounded-lg shadow-xl bg-amber-600">
                Submit
            </button>
        </div>
    </form>
</div>
