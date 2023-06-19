import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig(() => ({
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  plugins: [react()],
  build: {
    lib: {
      entry: resolve('src', 'index.tsx'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
    },
  },
}))
