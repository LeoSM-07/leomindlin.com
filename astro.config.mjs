// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
// @ts-expect-error No TS for this one
import codeFigure from 'remark-code-figure';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';

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
  markdown: { 
    remarkPlugins: [codeFigure],
    rehypePlugins: [rehypeSlug, [rehypeExternalLinks, {target: "_blank"}], [rehypeAutolinkHeadings, {behavior: "wrap"}]],
    syntaxHighlight: false
  },
  integrations: [mdx({ syntaxHighlight: false })]
});
