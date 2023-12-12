import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // Resolve the uncompiled source code for all @scalar packages.
      {
        find: /^@scalar\/([^/]+)$/,
        replacement: path.resolve(__dirname, '../packages/$1/src/index.ts'),
      },
    ],
  },
})
