import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeExternalLinks from 'rehype-external-links'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [mdx(),svelte(),react()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    markdown: {
    format: 'mdx', 
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
   },
  })