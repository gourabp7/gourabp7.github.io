import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetIcons, presetTagify } from 'unocss'

export default defineConfig({
  content: { pipeline: { include: [/\.svelte$/, /\.md?$/, /\.ts$/] } },
  safelist: [
    'i-simple-icons-github',
    'i-simple-icons-googlescholar',
    'i-simple-icons-linkedin',
    'i-simple-icons-orcid',
    'i-simple-icons-acm',
    'i-simple-icons-gmail',
  ],
  extractors: [extractorSvelte],
  presets: [
    presetTagify({
      extraProperties: (matched: string) => (matched.startsWith('i-') ? { display: 'inline-block' } : {}),
    }),
    presetIcons({ scale: 1.5 }),
  ],
})
