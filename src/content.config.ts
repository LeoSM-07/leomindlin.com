import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // Use underscore as a prefix for draft posts.
  // Drafts will show in dev but be hidden in prod
  loader:  glob({ pattern: import.meta.env.PROD ? "**/[^_]*.{md,mdx}" : "**/*.{md,mdx}", base: "./src/posts" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
  })
});

export const collections = { posts };
