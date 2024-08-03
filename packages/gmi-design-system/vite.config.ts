import { resolve } from 'path'
import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import config from './.storybook/main'

// tsconfg setting is not working
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import packageJson from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: convertExportsToEntries(packageJson.exports),
      name: 'gmi-design-system',
      fileName: 'index',
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
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
    vanillaExtractPlugin(config),
  ],
})

function convertExportsToEntries(exports: object) {
  const entries: Record<string, string> = {}
  for (const key in exports) {
    if (/^\.\S+[^/]+\.[^/]+$/.test(key)) continue // Ignore regular expression patterns that end with *.*
    const entryPath = key === '.' ? './src/index.ts' : `src/${key}/index.ts`
    const formattedKey = key === '.' ? 'index' : `${key.slice(2)}/index`
    entries[formattedKey] = resolve(__dirname, entryPath)
  }
  return entries
}
