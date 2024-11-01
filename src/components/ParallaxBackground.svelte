<script>
  let scrollY
  const parallaxImage = '/background-pattern.webp';
</script>

<svelte:window bind:scrollY={scrollY} />

<!-- <h1>{scrollY}</h1> -->
<div class="fixed parallax w-screen h-screen -z-10" style="background-position-y: {scrollY * -0.35}px; background-image: url({parallaxImage});">
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