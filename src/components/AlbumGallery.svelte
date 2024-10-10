<script lang="ts">
    import { BxlSpotify, BxlApple } from 'svelte-boxicons';
    import AlbumCover from "../components/AlbumCover.svelte";
    import { Button, Modal } from "flowbite-svelte";

    import thriveCover from "../../src/images/Thrive.jpg";
    let bottomPaddingCSS = "lg:pb-20 md:pb-16 pb-12";

    const handleButtonClick = (event) => {
        modalAlbumIndex = event.detail?.albumIndex;
        modalOpen = true;
    };

    const selectPlatform = (platform) => {
        modalOpen = false;

        let href = ""
        if (platform == "spotify") {
            href = albums[modalAlbumIndex].hrefSpotify;
        }
        else if (platform == "apple") {
            href = albums[modalAlbumIndex].hrefAppleMusic;
        }
        
        if (href == "") {
            alert("It looks like a link to that platform is not available at this time. Please try again later!");
            return
        }
        window.open(href, "_blank");

    }

    let modalAlbumIndex = 0;
    let modalOpen = false;

    const albums = [
        {
            title: "Thrive",
            imageSrc: thriveCover.src,
            hrefAppleMusic: "",
            hrefSpotify: "",
            releaseDate: "October 2024",
        },
    ];
</script>

<div class="pt-0 md:pt-18 w-full">

    

    <Modal class="w-11/12 max-w-sm md:max-w-none md:w-3/5" title="Apple Music or Spotify?" bind:open={modalOpen} autoclose outsideclose>
        <div class="flex w-full justify-around">
            <Button on:click={() => {selectPlatform("spotify")}} color="alternative" class="bg-black p-2">
                <BxlSpotify color="#1DB954" class="w-24 h-24" />
            </Button>
            <Button on:click={() => {selectPlatform("apple")}} color="alternative" class="bg-white p-2">
                <BxlApple color="#FA2D48" class="w-24 h-24 " />
            </Button>
        </div>
    </Modal>


    {#each albums as item, index}
        <div class="{index != albums.length - 1 ? bottomPaddingCSS : ''} w-10/12 md:w-2/5 lg:w-2/5 mx-auto flex justify-center items-center flex-col md:max-w-lg max-w-sm">
            <AlbumCover
                albumTitle={item.title}
                imageSrc={item.imageSrc}
                releaseDate={item.releaseDate}
                albumIndex = {index}
                on:coverClicked={handleButtonClick}
            />
        </div>
    {/each}
</div>