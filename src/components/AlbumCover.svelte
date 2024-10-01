<script>
    import { Img, Secondary, Heading } from "flowbite-svelte";

    export let imageSrc;
    export let albumTitle = "";
    export let href = "";
</script>

<a href={href} class="block">
    <Img
        src={imageSrc}
        alt="{albumTitle} Album Cover"
        class="rounded-lg shadow-xl dark:shadow-gray-800 pointer-events-none mx-center"
    />
    <Heading tag="h2" customSize="text-2xl font-extrabold mt-5" class="text-center text-gray-700">{albumTitle}</Heading>
</a>
