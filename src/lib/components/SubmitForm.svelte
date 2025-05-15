<script lang="ts">

    import {createEmptySlangProject, type ISlangProject } from '$lib/EntryData';

    import {fly} from 'svelte/transition';

    const { SlangProject = createEmptySlangProject(), onCloseSubmitButton, onSubmit } = $props();


    function handleSubmit(event: Event){
            event.preventDefault();
            onSubmit(SlangProject);
    }


</script>

<div transition:fly="{{ y: -100, duration: 300 }}" class="w-screen h-screen fixed inset-0 bg-slate-100 backdrop-blur-2xl z-50 flex items-center justify-center">
    <form class="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 w-full max-w-md"
          onsubmit ={handleSubmit}>
        <h1 class="text-2xl font-semibold">Submit your project </h1>
        <p class="opacity-70">Your project will be reviwed, so this might take couple of days</p>
        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Contact email</span>
            <input
                class="border rounded p-2"
                type="email"
                bind:value={SlangProject.contactEmai}
                required
            />
        </label>
        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Name</span>
            <input
                class="border rounded p-2"
                type="text"
                bind:value={SlangProject.name}
                required
            />
        </label>
        <label class="flex flex-col">
            <span class="mb-1 font-semibold">Project Description</span>
            <textarea
                class="border rounded p-2"
                rows="3"
                bind:value={SlangProject.description}
                required
            ></textarea>
        </label>
        <label class="flex flex-col">
            <span class="mb-1 font-semibold">GitHub Link</span>
            <input
                class="border rounded p-2"
                type="url"
                bind:value={SlangProject.ghLink}
                required
            />
        </label>
        <div class="flex items-center w-full gap-2">    
            <button onclick={onCloseSubmitButton}  type="button" class="w-1/2 text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600">
                Close
            </button>
            <button type="submit" class="w-1/2 text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600">
                Submit
            </button>
        </div>
    </form>
</div>