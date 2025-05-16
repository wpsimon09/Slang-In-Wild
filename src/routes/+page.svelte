<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Entry from "$lib/components/Entry.svelte";
    import SubmitForm from "$lib/components/SubmitForm.svelte";
    import { createEmptySlangProject, ETag, type ISlangProject } from "$lib/EntryData";
    import TagView from "$lib/components/TagView.svelte";

    let submitFormOpened = $state(false);

    let tag = $state(Object.values(ETag));

    function openSubmitForm():void{
        if(submitFormOpened) submitFormOpened = false;
        else submitFormOpened = true
    }

    function closeForm():void{
        console.log("closing submit")
        submitFormOpened = false;
    }

    function submitForm(newProject:ISlangProject):void{
        console.log(newProject);
    }

    const SlangProjectFilter = $state(createEmptySlangProject());


    const TestSlangProject = createEmptySlangProject();
    TestSlangProject.name = "Vulkan-RTX";
    TestSlangProject.description = "This is going to be a demonstration project entry for testing purposes. You can use this description to see how entries are rendered and displayed in the project grid.This is going to be a demonstration project entry for testing purposes. You can use this description to see how entries are rendered and displayed in the project grid.";
    TestSlangProject.tags = [ETag.RTX,ETag.RTX,ETag.RTX,ETag.RTX,ETag.RTX,ETag.RTX, ETag.Vulkan, ETag.DirectX, ETag.OpenGL, ETag.MachineLearning]
    TestSlangProject.ghLink = "https://github.com/"


</script>

<section class="f-full bg-zinc-100 font-chivo dark:bg-zinc-800 h-screen flex flex-col items-center">
    
    
    <Header/>

    {#if submitFormOpened}
        <SubmitForm onCloseSubmitButton = {closeForm} onSubmit= {submitForm}/>
    {/if}

    <div class=" md:w-[70%] lg:w-[60%] flex-1 flex flex-col items-center w-full mt-4 overflow-hidden">
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

        <h2 class="w-full text-left ml-10">Filter by tags:</h2>

        <div class="w-[90%]">
            <TagView isSelectable = {true} SlangProject={SlangProjectFilter} tagValues={Object.values(ETag)} />
        </div>  

     

        <div class="mt-2 py-5  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 md:gap-2 lg:gap-4 items-center h-full overflow-auto w-full p-2">
            {#each {length: 50} as _, i}
            <Entry num = {i} SlangProject={TestSlangProject} />
            {/each}
            
        </div>
    </div>

    <Footer/>
</section>