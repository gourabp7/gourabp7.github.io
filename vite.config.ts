// Polyfill localStorage for Node builds (prevent @typescript/vfs error)
if (typeof (globalThis as any).localStorage === 'undefined') {
  (globalThis as any).localStorage = {
    getItem: (_k: string) => null,
    setItem: (_k: string, _v: string) => {},
    removeItem: (_k: string) => {},
    clear: () => {}
  }
}

import { sveltekit } from '@sveltejs/kit/vite'
import { SvelteKitPWA as pwa } from '@vite-pwa/sveltekit'
// @ts-expect-error ts(7016)
import LightningCSS from 'postcss-lightningcss'
import TailwindCSS from 'tailwindcss'
import unoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

import tailwindConfig from './tailwind.config'
import unoConfig from './uno.config'

export default defineConfig({
  css: {
    postcss: {
      plugins: [TailwindCSS(tailwindConfig), LightningCSS()],
    },
  },
  envPrefix: 'URARA_',
  plugins: [
    unoCSS(unoConfig),
    imagetools(),
    sveltekit(),
    pwa({
      manifest: false,
      registerType: 'autoUpdate',
      scope: '/',
      workbox: {
        globIgnores: ['**/sw*', '**/workbox-*'],
        globPatterns: ['posts.json', '**/*.{js,css,html,svg,ico,png,webp,avif}'],
      },
    }),
  ],
})
