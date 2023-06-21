import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
export default defineConfig(() => ({
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    react(),
    dts({
      include: [
        'src/index.tsx',
        'src/types.ts',
        'src/Chronous/index.tsx',
        'src/Chronous/types.ts',
      ],
    }),
  ],
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
