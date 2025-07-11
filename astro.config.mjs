// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Define base path from config, or default to "/"
const basePath = process.env.BASE_PATH || "/"

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/': basePath + 'nl/home',
        '/probleem': basePath + 'nl/probleem',
        '/oplossingen': basePath + 'nl/oplossingen',
        '/gemeente': basePath + 'nl/gemeente'
    },

    output: 'static',

    base: basePath,

    integrations: [
        mdx(),
    ],
});
