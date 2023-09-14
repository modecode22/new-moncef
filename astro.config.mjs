import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  integrations: [tailwind(), mdx()],
});