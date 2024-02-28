import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://vikkuccine.saenq.space/portfolio',
  base: '/portfolio',
  integrations: [tailwind(), sitemap(), astroI18next(), react()]
});