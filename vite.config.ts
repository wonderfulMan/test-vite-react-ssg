import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { } from 'vite-react-ssg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/test-vite-react-ssg',
  build: {
    outDir: 'docs',
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'This-Is-A-Custom-Header': 'yes',
    },
  },
})
