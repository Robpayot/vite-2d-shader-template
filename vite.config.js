// vite.config.js
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import path from 'path'
import babel from 'vite-plugin-babel'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [viteCommonjs(), babel(), glsl()],
})
