<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Entry from "$lib/components/Entry.svelte";
    import SubmitForm from "$lib/components/SubmitForm.svelte";
    import type { ISlangProject } from "$lib/EntryData";

    let submitFormOpened = false;

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

</script>

<section class="f-full bg-zinc-100 dark:bg-zinc-800 h-screen flex flex-col items-center">
    {#if submitFormOpened}
        <SubmitForm onCloseSubmitButton = {closeForm} onSubmit= {submitForm}/>
    {/if}

    <Header/>

    <div class=" md:w-[70%] lg:w-[60%] flex-1 flex flex-col items-center w-full overflow-auto">

        <div class="w-full flex-col flex lg:flex-row items-center">
            <div class="w-full flex gap-3 items-center justify-start px-4 mt-4">
                <input class="rounded-xl h-10" type="text" placeholder="Search">
                <button class="h-7 w-7 hover:h-8 hover:w-8 duration-200 hover:cursor-pointer ">
                    <img alt="search" src="/svg/search.svg" class="h-full w-full"  />
                </button>
            </div>
    
            <div class="w-full  flex lg:justify-end px-4 mt-4">
                <button on:click={openSubmitForm} class="text-white duration-200 hover:text-zinc-600 hover:cursor-pointer hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600" >Submit project</button>
            </div>
        </div>

     

        <div class="mt-2 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-2 lg:gap-4 items-center h-full overflow-auto w-full">
            {#each {length: 50} as _, i}
            <Entry num = {i} />
            {/each}
            
        </div>
    </div>
    <Footer/>
</section>