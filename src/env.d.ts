/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import type { DefineComponent } from 'vue'
declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// with vite-plugin-md, markdown can be treated as Vue components
declare module '*.md' {
  const component: DefineComponent<{}, {}, any>
  export default component
}
