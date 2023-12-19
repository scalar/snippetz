import { defineConfig } from 'vite'
import meta from './package.json'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: meta.name,
      fileName: 'index',
    },
  },
  resolve: {
    alias: [
      // Resolve the uncompiled source code for all @scalar packages.
      {
        find: /^@scalar\/([^/]+)$/,
        replacement: path.resolve(__dirname, '../../packages/$1/src/index.ts'),
      },
    ],
  },
})
