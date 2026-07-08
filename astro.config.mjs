// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pcornejov.github.io',
  base: '/gruassepu',
  vite: {
    plugins: [tailwindcss()],
  },
});
