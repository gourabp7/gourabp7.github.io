// Polyfill localStorage for Node builds (prevent @typescript/vfs error)
// Node 25+ has a built-in localStorage that requires --localstorage-file to work
if (typeof (globalThis as any).localStorage === 'undefined' || typeof (globalThis as any).localStorage?.getItem !== 'function') {
  const data: Record<string, string> = {};
  (globalThis as any).localStorage = {
    getItem: (k: string) => Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null,
    setItem: (k: string, v: string) => { data[k] = String(v); },
    removeItem: (k: string) => { delete data[k]; },
    clear: () => { for (const k in data) delete data[k]; },
    get length() { return Object.keys(data).length; },
    key: (i: number) => Object.keys(data)[i] ?? null,
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
