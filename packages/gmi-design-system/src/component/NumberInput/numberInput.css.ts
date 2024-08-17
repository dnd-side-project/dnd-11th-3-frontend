import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token'

export const NUMBER_INPUT_BG_COLOR = {
  default: color.white,
  gradient: `linear-gradient(91deg, #00E989 0.3%, #24E3BF 100%)`,
  filled: color['gray-000'],
  disabled: color['gray-900'],
}
export const NUMBER_INPUT_COLOR = {
  default: color['gray-100'],
  gradient: 'white',
  filled: color['gray-100'],
  disabled: color['gray-500'],
  error: color.error,
}

export const textInputLabelStyle = style({
  marginBottom: '17px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  color: color['gray-100'],
})

export const textInputLabelContainerStyle = style({
  width: '100%',
  height: 'fit-content',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
})

export const arrowIconButtonStyle = style({
  cursor: 'pointer',
})

export const textInputDescriptionStyle = style({
  fontSize: '0.8rem',
  color: color.error,
  marginTop: '5px',
})

export const textInputWrapperStyle = recipe({
  base: {
    width: '100%',
    padding: '14px 15px',
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
      filled: {
        color: color['gray-100'],
        backgroundColor: NUMBER_INPUT_BG_COLOR.filled,
        border: `1px solid ${color['gray-800']}`,
      },
      gradient: {
        color: color.white,
        background: 'linear-gradient(91deg, #00E989 0.3%, #24E3BF 100%)',
        border: 'none',
      },
      disabled: {
        cursor: 'not-allowed',
        border: `1px solid ${color['gray-800']}`,
        backgroundColor: NUMBER_INPUT_BG_COLOR.disabled,
      },

      error: { border: `1px solid ${color.error}` },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})

export const numberWrapperStyle = style({
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
})

export const numberInputStyle = recipe({
  base: {
    width: 55,

    color: NUMBER_INPUT_COLOR.default,
    border: 'none',

    fontSize: 20,
    fontWeight: 600,
    '::placeholder': {
      color: color['gray-500'],
      fontSize: 16,
      fontWeight: 500,
    },
    '::-webkit-inner-spin-button': {
      display: 'none',
    },
    '::-webkit-outer-spin-button': {
      display: 'none',
    },
  },

  variants: {
    color: {
      default: { backgroundColor: NUMBER_INPUT_BG_COLOR.default },
      filled: {
        backgroundColor: NUMBER_INPUT_BG_COLOR.filled,
      },
      disabled: {
        cursor: 'not-allowed',
        color: NUMBER_INPUT_COLOR.disabled,
        backgroundColor: NUMBER_INPUT_BG_COLOR.disabled,
      },
      gradient: {
        color: NUMBER_INPUT_COLOR.gradient,
      },
      error: { color: NUMBER_INPUT_COLOR.error },
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
      gradient: { color: color.white },
      filled: { color: color['gray-400'] },
      disabled: { color: color['gray-400'] },
      error: { color: color.error },
    },
  },

  defaultVariants: {
    color: 'default',
  },
})
