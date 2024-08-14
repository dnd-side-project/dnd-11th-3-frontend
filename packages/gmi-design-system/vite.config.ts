import { resolve } from 'path'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      formats: ['es', 'cjs'],
      name: 'gmi-design-system',
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react({
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
    svgr(),
    vanillaExtractPlugin(),
  ],
})
