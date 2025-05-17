<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Entry from "$lib/components/Entry.svelte";
    import SubmitForm from "$lib/components/SubmitForm.svelte";
    import { createEmptySlangProject, ETag, type ISlangProject } from "$lib/EntryData";
    import TagView from "$lib/components/TagView.svelte";
    import type { PageProps } from './$types';

    let submitFormOpened = $state(false);

    let tag = $state(Object.values(ETag));

    let { data }: PageProps = $props();

    console.log(data);

    
    
    function openSubmitForm():void{
        if(submitFormOpened) submitFormOpened = false;
        else submitFormOpened = true
    }

    function closeForm():void{
        console.log("closing submit")
        submitFormOpened = false;
    }

    const SlangProjectFilter = $state(createEmptySlangProject());

</script>

<section class="f-full bg-zinc-100 font-chivo dark:bg-zinc-800 flex flex-col items-center">
    
    
    <Header/>

    {#if submitFormOpened}
        <SubmitForm onCloseSubmitButton = {closeForm}/>
    {/if}
    {#if !submitFormOpened}
        
    
    <div class="w-full bg-zinc-100/90  backdrop-blur-xl py-4 sticky top-0 z-40 md:w-[70%] lg:w-[60%] flex flex-col items-center mt-4 overflow-hidden">
        <div class="w-full ">
                <div class="w-full flex flex-row items-center justify-between">
                    <div class="lg:w-full flex gap-3 items-center justify-start px-4 mt-4">
                        <input class="rounded-xl w-40 lg:w-1/3 lg:h-10" type="text" placeholder="Search">
                        <button class="h-7 w-7 hover:h-8 hover:w-8 duration-200 hover:cursor-pointer ">
                            <img alt="search" src="/svg/search.svg" class="h-full w-full"  />
                        </button>
                    </div>
                    
                    <div class="flex justify-end  mt-4 mr-4">
                        <button onclick={openSubmitForm} class="text-white duration-200 lg:w-40 hover:text-zinc-600 hover:cursor-pointer hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600" >Submit project</button>
                    </div>
                </div>
                
                
                <h2 class="w-full text-left ml-10 lg:mt-4 mt-2">Filter by tags:</h2>
                <div class="w-[90%] lg:w-full lg:px-4">
                    <TagView onFrontPage = {true} SlangProject={SlangProjectFilter} tagValues={Object.values(ETag)} />
                </div>  
        </div>
    </div>
    <div class="  md:w-[70%] lg:w-[60%] flex flex-col items-center w-full mt-4 overflow-hidden">
        
        
        <div class="mt-2 py-5  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 md:gap-2 lg:gap-4 items-center h-full w-full p-2">
            {#each data.projects as project, i}
            <Entry num = {i} SlangProject={project} />
            {/each}
            
        </div>
    </div>
    
    {/if}
    <Footer/>
</section>