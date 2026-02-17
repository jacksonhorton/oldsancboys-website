<script>
    import { Img, Secondary, Heading } from "flowbite-svelte";

    export let imageSrc;
    export let albumTitle = "";
    export let releaseDate;
    export let albumIndex;


    // for handling clicking on album event
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function handleClick() {
        console.log("clicked in component")
        dispatch('coverClicked', { albumIndex: albumIndex});
    }
</script>

<button on:click={handleClick} class="block">
    <Img
        src={imageSrc}
        alt="{albumTitle} Album Cover"
        class="rounded-2xl md:rounded-3xl shadow-xl dark:shadow-gray-800 pointer-events-none mx-center"
    />
    <Heading tag="h2" customSize="text-2xl font-extrabold mt-5" class="text-center text-gray-700">
        {albumTitle}
        {#if releaseDate!=""}
            <br>
            <Secondary class="text-md">{releaseDate}</Secondary>
        {/if}
    </Heading>
</button>
