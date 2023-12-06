import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
const __dirname = path.resolve()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
})
