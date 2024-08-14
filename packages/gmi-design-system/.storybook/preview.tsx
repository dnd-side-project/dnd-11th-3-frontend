import React from 'react'

import type { Preview } from '@storybook/react'

import '../src/global.css'
import './styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [Story => <Story />],
}

export default preview
