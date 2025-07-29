// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono"
      },{
        provider: fontProviders.google(),
        name: "Public Sans",
        cssVariable: "--font-public-sans",
        weights: ["300 800"]
      },
    ]
  },
  integrations: [mdx({syntaxHighlight: false})]
});
