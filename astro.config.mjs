import { defineConfig } from 'astro/config';
import image from '@astrojs/image';


export default defineConfig({
  site: 'https://oldsancboys.com',
  integrations: [image()],
});