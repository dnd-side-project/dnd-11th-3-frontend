/**
 * @type {import('@storybook/react-vite').StorybookConfig} StorybookConfig
 */
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const config = {
  framework: {
    name: '@storybook/react',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-designs',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  docs: {},
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  // core: {
  //   builder: '@storybook/builder-vite',
  // },
  plugins: [new vanillaExtractPlugin()],
}

export default config
