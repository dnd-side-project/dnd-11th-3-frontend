import '../src/global.css'
import './styles.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    'aria-live': {
      /** Indicates whether live regions inside `ShadowRoot`s should be tracked. Defaults to false. */
      includeShadowDom: true,
    },
    actions: {},
    controls: {},
  },
  tags: ['autodocs'],
}

export default preview
