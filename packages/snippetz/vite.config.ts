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
    rollupOptions: {
      external: [
        'prettier',
        'prettier/plugins/babel',
        'prettier/plugins/estree',
      ],
      output: {
        globals: {
          prettier: 'prettier',
          'prettier/plugins/babel': 'babel',
          'prettier/plugins/estree': 'estree',
        },
      },
    },
  },
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
