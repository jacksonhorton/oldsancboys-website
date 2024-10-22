import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import sitemap from 'astro-sitemap';



export default defineConfig({
  site: 'https://oldsancboys.com',
  integrations: [tailwind(), svelte(), sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});