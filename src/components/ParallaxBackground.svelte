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
    console.log(screenWidth);
    if (screenWidth < 768) {
      console.log("small");
      return -0.4; // smaller screens
    } else if (screenWidth < 1024) {
      console.log("med");
      return -1.2; // mid-sized screens
    } else {
      console.log("large");
      return -0.75; // Default multiplier for larger screens
    }
  }

</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={screenWidth}/>

<!-- <h1>{scrollY}</h1> -->
<div class="fixed parallax w-screen h-screen -z-10" style="background-position-y: {scrollY * multiplier}px; background-image: url({parallaxImage});">
</div>

<style>
  .parallax {
    background-image: url('/background-pattern.webp');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
</style>