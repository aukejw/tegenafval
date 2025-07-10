// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/': '/nl/home',
        '/probleem': '/nl/probleem',
        '/oplossingen': '/nl/oplossingen',
        '/gemeente': '/nl/gemeente'
    }
});
