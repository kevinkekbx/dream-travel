import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  theme: {
    fontFamily: {
      porsche: `'Porsche Next'`,
    },
    colors: {
      primary: '#010205',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUseful({
      icons: {
        scale: 1.2,
        warn: true,
        collections: {
          porsche: FileSystemIconLoader(
            './src/assets/icons',
            svg => svg.replace(/#fff/, 'currentColor'),
          ),
        },
      },
      webFonts: {
        fonts: {
          sans: 'DM Sans',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
        },
      },
    }),
  ],
})
