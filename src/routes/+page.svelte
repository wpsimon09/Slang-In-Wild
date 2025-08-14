<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Entry from "$lib/components/Entry.svelte";
    import SubmitForm from "$lib/components/SubmitForm.svelte";
    import { enhance } from "$app/forms";
    import {
        createEmptySlangProject,
        ETag,
        type ISlangProject,
    } from "$lib/EntryData";
    import TagView from "$lib/components/TagView.svelte";
    import type { PageProps } from "./$types";
    import { scale } from "svelte/transition";
    import { expoInOut } from "svelte/easing";
    import { onMount } from "svelte";

    const SlangProjectFilter = $state(createEmptySlangProject());

    console.log("Hello there ! Have a nice day :) ");

    //==========================================
    // initial variables
    let { data, form }: PageProps = $props();
    let submitFormOpened = $state(false);
    let searchText = $state();

    //==========================================
    // functions

    function openSubmitForm(): void {
        if (submitFormOpened) submitFormOpened = false;
        else submitFormOpened = true;
    }

    function closeForm(): void {
        submitFormOpened = false;
    }

    function clearTags(): void {
        SlangProjectFilter.tags = SlangProjectFilter.tags.filter(
            (tag) => false,
        );
    }

    function clearTagsAndSearchText(): void {
        clearTags();
        searchText = "";
    }

    //==========================================
    // filtering by text and tags
    let FilteredProjects = $derived(
        data.projects.filter(
            (project) =>
                (SlangProjectFilter.tags.length === 0 ||
                    SlangProjectFilter.tags.every((tag) =>
                        project.tags.includes(tag),
                    )) &&
                (!searchText ||
                    project.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())),
        ),
    );
</script>

<section
    class="f-full dark:bg-zinc-800 bg-zinc-100 font-chivo min-h-screen flex flex-col items-center"
>
    {#if !submitFormOpened}
        <Header />
    {/if}

    {#if submitFormOpened}
        <div class="flex-1 flex-row flex items-center">
            <SubmitForm onCloseSubmitButton={closeForm} />
        </div>
    {/if}
    {#if !submitFormOpened}
        <div
            transition:scale={{ duration: 120, delay: 0, easing: expoInOut }}
            class="w-full dark:bg-zinc-800/90 bg-zinc-100/90 backdrop-blur-xl py-4 sticky top-0 z-40 md:w-[90%] lg:w-[65%] flex flex-col items-center mt-4 overflow-hidden"
        >
            <div class="w-full">
                <div
                    class="w-full flex flex-row items-center lg:justify-between"
                >
                    <div
                        class="lg:w-full w-2/3 flex gap-3 items-center justify-start px-4 mt-4"
                    >
                        <input
                            bind:value={searchText}
                            class="rounded-xl w-full md:w-[90%] md:h-10 lg:w-1/3 lg:h-10 dark:bg-transparent dark:border-2 dark:border-zinc-300 dark:text-white"
                            type="text"
                            placeholder="Search"
                        />
                    </div>

                    <div
                        class="flex flex-row items-center w-1/3 md:justify-end lg:justify-end h-10 mt-4 mr-4"
                    >
                        <button
                            onclick={openSubmitForm}
                            class="text-white text-xs text-center h-full md:text-lg lg:text-lg duration-200 md:w-40 lg:w-40 w-full hover:text-white hover:cursor-pointer hover:bg-teal-700 p-2 rounded-lg shadow-xl bg-amber-600"
                            >Submit project</button
                        >
                    </div>
                </div>

                <div class="w-full flex-row felx items-center">
                    <div class="w-full justify-between px-4 flex mt-4 flex-row">
                        <h2
                            class="w-full dark:text-white text-left font-bold mt-2"
                        >
                            Filter by tags:
                        </h2>
                        <button
                            onclick={clearTags}
                            class="h-8 w-8 bg-amber-600 p-1 rounded-full hover:bg-teal-700 hover:rotate-180 duration-200 cursor-pointer"
                        >
                            <img
                                alt="reset filters"
                                class="h-full w-full"
                                src="svg/reset-filter-2.svg"
                            />
                        </button>
                    </div>
                    <div
                        class="w-[90%] md:w-full lg:w-full pl-4 mt-3 md:mt-4 lg:mt-2"
                    >
                        <TagView
                            onFrontPage={true}
                            SlangProject={SlangProjectFilter}
                            tagValues={Object.values(ETag)}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div
            transition:scale={{ duration: 120, delay: 120, easing: expoInOut }}
            class="md:w-[90%] lg:w-[65%] flex-1 flex flex-col items-center w-full mt-4 overflow-hidden"
        >
            {#if FilteredProjects.length === 0}
                <div
                    transition:scale={{ duration: 220, easing: expoInOut }}
                    class="flex-1 w-full h-full flex flex-col items-center justify-center text-zinc-400 text-xl"
                >
                    No projects found.
                    <button
                        onclick={clearTagsAndSearchText}
                        class="text-zinc-400 text-xl hover:text-2xl duration-200 hover:cursor-pointer underline"
                    >
                        Clear all filters & search
                    </button>
                </div>
            {:else}
                <div
                    transition:scale={{
                        duration: 120,
                        delay: 120,
                        easing: expoInOut,
                    }}
                    class="mt-2 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2 lg:gap-4 items-center h-full w-full p-2"
                >
                    {#each FilteredProjects as project, i}
                        <Entry num={i} SlangProject={project} />
                    {/each}
                </div>
            {/if}
        </div>
    {/if}
    <Footer />
</section>
