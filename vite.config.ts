import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
      dirs: [
        { dir: "src/pages", baseRoute: "" },
      ]
    }),
    Markdown(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
    ],
    exclude: [
    ],
  },
})
