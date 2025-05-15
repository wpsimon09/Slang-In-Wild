<script>
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Entry from "$lib/components/Entry.svelte";
</script>

<section class="f-full bg-zinc-50 dark:bg-zinc-800 h-screen flex flex-col items-center">
    
    <Header/>

    <div class=" md:w-[70%] lg:w-[60%] flex-1 flex flex-col items-center w-full overflow-auto">

        <div class="w-full flex items-center">
            <div class="w-full flex justify-start px-4 mt-4">
                <input class="rounded-xl" type="text" placeholder="Search">
                <button>
                    <img alt="search"  />
                </button>
            </div>
    
            <div class="w-full  flex justify-end px-4 mt-4">
                <button class="text-white duration-200 hover:text-zinc-600 hover:bg-cyan-300 p-2 rounded-lg shadow-xl bg-amber-600" >Submit project</button>
            </div>
        </div>


        <div class="mt-2 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-2 lg:gap-4 items-center h-full overflow-auto w-full">
            {#each {length: 50} as _, i}
            <Entry/>
            {/each}
            
        </div>
    </div>
    <Footer/>
</section>