import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'CNAME',
          source: 'www.heinemann.foo'
        });
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public'
})
