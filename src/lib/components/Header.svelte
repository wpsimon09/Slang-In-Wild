<script lang="ts">
    import { expoInOut } from "svelte/easing";
    import { scale } from "svelte/transition";
    import { onMount } from "svelte";

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
    transition:scale={{ duration: 120, delay: 0, easing: expoInOut }}
    class="flex flex-col items-center w-full md:w-1/2 lg:w-1/2"
>
    <a
        target="_blank"
        rel="noopener noreferrer"
        class="w-full hidden md:block lg:block md:w-1/2 lg:w-1/2 h-full"
        href="https://shader-slang.org/"
    >
        <img
            alt=" slang-logo "
            class="h-full w-full"
            src={darkMode
                ? "svg/slang-logo-light.svg"
                : "svg/slang-logo-dark.svg"}
        />
    </a>
    <a
        target="_blank"
        rel="noopener noreferrer"
        class="w-20 h-20 md:hidden lg:hidden lg:w-1/2"
        href="https://shader-slang.org/"
    >
        <img
            alt=" slang-logo "
            class="h-full w-full"
            src={darkMode ? "svg/slang-small-light.svg" : "svg/slang-small.svg"}
        />
    </a>

    <h1
        class="font-chivo font-semibold px-10 lg:px-0 lg:text-2xl dark:text-white justify-center text-center mt-2 lg:mt-10"
    >
        Open source projects that are using Slang shading language
    </h1>
</div>
