import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://dincertekin.github.io/',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Dinçer Tekin',
      openGraph: {
        home: {
          title: 'Dinçer Tekin',
          description: 'Cybersecurity & Software Engineering Blog.'
        },
        blog: {
          title: 'Blog',
        }
      },
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});