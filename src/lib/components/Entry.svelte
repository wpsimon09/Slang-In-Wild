<script lang="ts">
    import type {
        createEmptySlangProject,
        ISlangProject,
    } from "$lib/EntryData";
    import { scale } from "svelte/transition";
    import { expoInOut } from "svelte/easing";
    import { onMount } from "svelte";

    const { num, SlangProject } = $props();

    //========================
    // TODO: refactor this to be reusable, it is also in the header component
    let darkMode = $state();
    onMount(() => {
        darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addListener(function (e) {
                console.log(`changed to ${e.matches ? "dark" : "light"} mode`);
                if (e.matches) {
                    darkMode = true;
                } else {
                    darkMode = false;
                }
            });
    });
</script>

<div
    transition:scale={{ duration: 220, delay: 20, easing: expoInOut }}
    class=" flex bg-white dark:bg-zinc-900 border-1 border-zinc-200 dark:border-zinc-900 p-4 lg:p-2 flex-col duration-120 rounded-2xl shadow-xl w-full lg:mx-0"
>
    <div class="px-2 w-full flex flex-row items-center justify-between">
        <div class="flex flex-col wrap flex-1 min-w-0">
            <div class="w-full">
                <div
                    class="overflow-x-auto whitespace-nowrap w-full no-scrollbar"
                >
                    <h1
                        class="font-chivo dark:text-white font-semibold text-2xl inline-block"
                    >
                        {SlangProject.name}
                    </h1>
                </div>
            </div>
            <p class="text-s text-zinc-400 dark:text-zinc-200">
                by: {SlangProject.authorName}
            </p>
        </div>
        <div class="h-7 w-7 lg:h-8 lg:w-8 flex-shrink-0 justify-end m-2">
            <a
                target="_blank"
                rel="noopener noreferrer"
                class="h-full w-full"
                href={SlangProject.ghLink}
            >
                <img
                    alt="github"
                    class="hover:scale-110 duration-100 h-full w-full"
                    src={darkMode
                        ? "svg/github-light.svg"
                        : "svg/github-cyan.svg"}
                />
            </a>
        </div>
    </div>
    <div
        class="w-1/3 ml-2 mt-2 h-1 {num % 2 == 0
            ? ' bg-amber-500'
            : 'bg-teal-700'} "
    ></div>
    <div
        class="mx-2 mt-4 overflow-hidden overflow-y-scroll m-2 font-chivo font-light lg:h-80 h-80 text-sm lg:text-lg"
    >
        <p class=" font-bold dark:text-white">Description:</p>
        <div class="dark:text-white text-lg">
            {SlangProject.description}
        </div>
    </div>

    <p class=" ml-2 font-bold dark:text-white mt-2">Tags:</p>

    <div
        class="w-full mt-1 h-30 gap-3 grid grid-cols-3 overflow-auto grid-rows-3"
    >
        {#each SlangProject.tags as tag, i}
            <button
                class=" justify-around {num % 2 == 0
                    ? 'bg-amber-600 text-white'
                    : ' bg-teal-700 text-white'} p-1 shadow-md rounded-2xl h-8"
                >{tag}</button
            >
        {/each}
    </div>
</div>
