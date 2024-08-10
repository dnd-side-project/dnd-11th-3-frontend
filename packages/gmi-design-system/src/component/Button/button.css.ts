import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from 'src/token/Color/color'

export const buttonStyle = recipe({
  base: {
    width: '100%',
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
      small: { padding: '8px 0 8px 0', fontSize: '14px', height: '32px' },
      medium: { padding: '15px 0 15px 0', fontSize: '16px', height: '49px' },
      large: { padding: '18px 0 18px 0', fontSize: '18px', height: '60px' },
    },
    variant: {
      filled: {
        backgroundColor: color['primary-main'],
        color: color['white'],
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
  marginLeft: '0.3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
