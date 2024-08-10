/**
 * @type {import('@storybook/react-vite').StorybookConfig} StorybookConfig
 */
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const config = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
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
    builder: '@storybook/builder-vite',
  },
  plugins: [new vanillaExtractPlugin()],
  // async viteFinal(config) {
  //   config.plugins.push(vanillaExtractPlugin())
  //   return config
  // },
}

export default config
