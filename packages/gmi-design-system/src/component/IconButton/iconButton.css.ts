import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token/Color/color'

export const iconButtonWrapperStyle = recipe({
  base: {
    color: color['gray-100'],

    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    textAlign: 'center',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },

  variants: {
    size: {
      small: { padding: '8px 7px', fontSize: '14px', height: '32px' },
      medium: { padding: '15px 13px', fontSize: '16px', height: '49px' },
      large: { padding: '18px 16px', fontSize: '18px', height: '60px' },
    },
    variant: {
      default: {
        backgroundColor: color.white,
        color: color.white,
        ':hover': {
          backgroundColor: color['gray-900'],
        },
      },
      outlined: {
        border: `3px solid ${color['gray-800']}`,
        color: color['gray-200'],
        backgroundColor: color.white,
        ':hover': {
          backgroundColor: color['gray-900'],
        },
      },
      disabled: {
        cursor: 'not-allowed',
        color: color['gray-400'],
        backgroundColor: color['gray-700'],
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const iconWrapperStyle = style({
  marginLeft: '0.3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
