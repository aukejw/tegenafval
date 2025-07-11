// @ts-check
import { defineConfig } from 'astro/config';

const base = '/tegenafval/';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/': base + 'nl/home',
        '/probleem': base + 'nl/probleem',
        '/oplossingen': base + 'nl/oplossingen',
        '/gemeente': base + 'nl/gemeente'
    },

    output: 'static',

    base: base
});
