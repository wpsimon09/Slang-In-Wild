<script lang="ts">

    import {createEmptySlangProject, type ISlangProject, ETag } from '$lib/EntryData';
    import {fly, scale} from 'svelte/transition';
    import TagView from './TagView.svelte';

    const {  onCloseSubmitButton, onSubmit } = $props();

    const NewSlangProject = $state(createEmptySlangProject());

    function handleSubmit(event: Event){
        event.preventDefault();
        onSubmit(NewSlangProject);
    }


</script>

<div transition:fly="{{ y: -100, duration: 300 }}" class="w-screen font-chivo h-screen  bg-slate-100 backdrop-blur-2xl  flex items-center justify-center ">
    <form class="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 w-full max-w-md" onsubmit={handleSubmit}>
        <button onclick={onCloseSubmitButton} type="button" class="justify-self-end bg-red-200"> Close</button>
        <h1 class="text-2xl font-chivo font-semibold">Submit your project </h1>
        <p class="opacity-70 font-chivo font-light">Your project will be reviewed, so this might take a couple of days</p>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Contact email</span>
            <input class="border rounded p-2" type="email" bind:value={NewSlangProject.contactEmai} required />
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Name</span>
            <input class="border rounded p-2" type="text" bind:value={NewSlangProject.name} required />
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Description</span>
            <textarea class="border rounded p-2" rows="3" bind:value={NewSlangProject.description} required></textarea>
        </label>

        <label class="flex flex-col">
            <span class="mb-1 font-semibold">GitHub Link</span>
            <input class="border rounded p-2" type="url" bind:value={NewSlangProject.ghLink} required />
        </label>

        <span class="mb-1 font-semibold">Choose your tags:</span>
        <TagView SlangProject={NewSlangProject} isSelectable = {true} tagValues={Object.values(ETag)}/>

        <div class="flex items-center w-full gap-2 mt-4">
            <button onclick={onCloseSubmitButton} type="button" class="w-1/2 text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600">
                Close
            </button>
            <button type="submit" class="w-1/2 text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600">
                Submit
            </button>
        </div>
    </form>
</div>
