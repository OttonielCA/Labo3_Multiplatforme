import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/Labo3_Multiplatforme/',
  build: {
    outDir: './docs'  // Ajout du ./ pour être sûr
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})