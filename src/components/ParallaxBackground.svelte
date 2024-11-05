<script>
  import { onMount } from 'svelte';

  let scrollY, screenWidth;
  const parallaxImage = '/background-pattern.webp';
  let multiplier = 1;
  
  onMount(() => {
    multiplier = getScrollYMultiplier()
    console.log(multiplier);
  });
  
  function getScrollYMultiplier() {
    // console.log(screenWidth);
    if (screenWidth < 768) {
      // console.log("small screen");
      return -0.4;
    } else if (screenWidth < 1024) {
      // console.log("medium screen");
      return -1.2;
    } else if (screenWidth < 1536) {
      // console.log("large screen");
      return -0.75;
    } else {
      // console.log("xl screen");
      return "-0.4";
    }
  }

</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={screenWidth} />

<div class="fixed parallax w-screen h-screen -z-10" style="background-position-y: {scrollY * multiplier}px;" />

<style>
  .parallax {
    background-image: url('/background-pattern.webp');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
</style>