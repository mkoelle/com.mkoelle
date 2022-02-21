import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Prism from 'markdown-it-prism'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      extensions: ['vue', 'md'],
      dirs: [
        { dir: 'src/pages', baseRoute: '' }
      ]
    }),
    Layouts(),
    Markdown({
      markdownItSetup (md) {
        md.use(Prism)
      }
    })
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router'
    ],
    exclude: [
    ]
  }
})
