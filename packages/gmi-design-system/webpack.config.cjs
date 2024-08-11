// tsconfg setting is not working
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const path = require('path')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const packageJson = require('./package.json')

function convertExportsToEntries(exports) {
  const entries = {}
  for (const key in exports) {
    if (/^\.\S+[^/]+\.[^/]+$/.test(key)) continue // Ignore regular expression patterns that end with *.*
    const entryPath = key === '.' ? './src/index.ts' : `src/${key}/index.ts`
    const formattedKey = key === '.' ? 'index' : `${key.slice(2)}/index`
    entries[formattedKey] = path.resolve(__dirname, entryPath)
  }
  return entries
}

module.exports = {
  mode: 'production',
  entry: convertExportsToEntries(packageJson.exports),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.build.json' })],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: '@vanilla-extract/webpack-plugin/loader',
            options: {
              // 필요한 옵션을 여기에 추가
            },
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [new VanillaExtractPlugin()],
  devtool: 'source-map',
}
