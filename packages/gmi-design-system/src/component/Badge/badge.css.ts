import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token/Color/color'

export const badgeWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    gap: '2px',

    borderRadius: '2px',
    lineHeight: '100%',
  },

  variants: {
    variant: {
      primary: {
        color: color.white,
        backgroundColor: color['primary-main'],
      },
      secondary: {
        color: color.white,
        backgroundColor: color['secondary-main'],
      },
      outlined: {
        color: '#F4811B',
        border: `1px solid ${color['gray-800']}`,
      },
    },
    size: {
      small: {
        padding: '4px',
        fontSize: '11px',
        fontWeight: '600',
      },
      medium: {
        padding: '6px 12px',
        fontSize: '16px',
        fontWeight: '700',
      },
      large: {
        padding: '8px 16px',
        fontSize: '20px',
        fontWeight: '800',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
})
