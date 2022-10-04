import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rating-component/',
  plugins: [react(), svgr()],
  resolve: {
    alias: { '~': '/src' },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        vanilla: new URL('./vanilla/index.html', import.meta.url).pathname,
      }
    }
  }
})
