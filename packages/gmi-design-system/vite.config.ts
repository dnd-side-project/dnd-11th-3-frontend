import { resolve } from 'path'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'cds',
      fileName: 'index',
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/react/jsx-runtime',
      ],
      output: [
        {
          format: 'cjs',
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].mjs',
        },
      ],
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      jsxRuntime: 'automatic',
    }),
    dts({ tsconfigPath: './tsconfig.build.json' }),
    viteStaticCopy({
      targets: [
        {
          src: ['src/*.css'],
          dest: resolve(__dirname, 'dist'),
        },
      ],
    }),
    vanillaExtractPlugin(),
  ],
})
