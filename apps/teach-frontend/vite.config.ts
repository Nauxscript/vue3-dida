import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vueJsx(), vue(), Unocss()],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      'services/': `${path.resolve(__dirname, 'src/services')}/`,
    },
  },
})
