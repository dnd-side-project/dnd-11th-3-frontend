import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token'

export const INPUT_BG_COLOR = {
  default: color.white,
  filled: color['gray-000'],
  disabled: color['gray-900'],
}
export const INPUT_COLOR = {
  default: color['gray-100'],
  filled: color['gray-100'],
  disabled: color['gray-500'],
  error: color.error,
}
export const selectStyle = recipe({
  base: {
    width: '100%',
  },

  variants: {
    size: {
      small: { padding: '8px 0 8px 0', fontSize: '14px', height: '32px' },
      medium: { padding: '15px 0 15px 0', fontSize: '16px', height: '49px' },
      large: { padding: '18px 0 18px 0', fontSize: '18px', height: '60px' },
    },
    variant: {
      filled: {
        backgroundColor: color['primary-main'],
        color: color.white,
      },
      outlined: {
        border: `1px solid ${color['gray-800']}`,
        color: color['gray-200'],
        backgroundColor: color['gray-000'],
      },
      disabled: {
        cursor: 'not-allowed',
        color: color['gray-400'],
        backgroundColor: color['gray-700'],
      },
    },
  },

  defaultVariants: {
    variant: 'filled',
  },
})

export const iconWrapperStyle = style({
  height: '100%',
  minHeight: '100%',
  width: 'fit-content',
  marginLeft: '0.3rem',
  backfaceVisibility: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
})

export const selectItemWrapper = recipe({
  base: {
    width: '100%',
    height: '100%',
    padding: '8px 16px',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    borderRadius: '8px',
    color: color['gray-100'],
    ':hover': {
      backgroundColor: color['primary-background'],
      color: color['primary-dark'],
    },
  },
  variants: {
    backgroundColor: {
      true: { backgroundColor: color['gray-900'] },
      false: { backgroundColor: color.white },
    },
  },
})

export const textInputWrapperStyle = recipe({
  base: {
    width: '100%',
    height: 49,
    padding: '8px',
    borderRadius: '8px',

    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  variants: {
    color: {
      default: {
        border: '1px solid #e0e0e0',
      },
      textOnly: {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: 600,
        color: color['gray-200'],
      },
      filled: {
        color: color['gray-100'],
        backgroundColor: INPUT_BG_COLOR.filled,
        border: `1px solid ${color['gray-800']}`,
      },
      disabled: {
        cursor: 'not-allowed',
        border: `1px solid ${color['gray-800']}`,
        backgroundColor: INPUT_BG_COLOR.disabled,
      },
      error: { border: `1px solid ${color.error}` },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const textInputLabelContainerStyle = style({
  width: '100%',
  height: 'fit-content',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
})

export const textInputLabelStyle = style({
  marginBottom: '17px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  color: color['gray-100'],
})
export const textInputStyle = recipe({
  base: {
    width: '100%',
    color: INPUT_COLOR.default,
    border: 'none',

    fontSize: 16,
    fontWeight: 500,
    '::placeholder': {
      color: color['gray-500'],
      fontSize: 16,
      fontWeight: 500,
    },
  },

  variants: {
    color: {
      default: { backgroundColor: INPUT_BG_COLOR.default },
      filled: {
        backgroundColor: INPUT_BG_COLOR.filled,
      },
      textOnly: {
        border: 'none',
        backgroundColor: 'transparent',
        fontSize: 20,
        fontWeight: 600,
        color: color['gray-200'],
      },
      disabled: {
        cursor: 'not-allowed',
        color: INPUT_COLOR.disabled,
        backgroundColor: INPUT_BG_COLOR.disabled,
      },
      error: { color: INPUT_COLOR.error },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const textMetaStyle = recipe({
  base: {
    width: '100%',
    fontSize: '14px',
    marginLeft: '5px',
    marginTop: '5px',
  },

  variants: {
    color: {
      default: { color: color['gray-400'] },
      textOnly: { color: color['gray-400'] },
      filled: { color: color['gray-400'] },
      disabled: { color: color['gray-400'] },
      error: { color: color.error },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const placeholderStyle = style({
  color: color['gray-400'],
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
