import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token/Color/color'

export const badgeWrapper = recipe({
   base: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'fit-content',
      gap: '2px',

      fontSize: '11px',
      fontWeight: '600',
      borderRadius: '2px',
      lineHeight: '100%',
   },

   variants: {
      variant: {
         filled: {
            color: color.white,
         },
         outlined: {
            color: '#F4811B',
            border: `1px solid ${color['gray-800']}`,
         },
      },
   },
   defaultVariants: {
      variant: 'filled',
   },
})

export const TextSpan = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const IconBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: '2px',
})

export const JobListBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   fontSize: '11px',
   fontWeight: '600',
   borderRadius: '2px',
   color: color['secondary-dark'],
   lineHeight: '100%',
   border: `1px solid ${color['gray-800']}`,
   padding: '0 4px ',
})

export const JobGreenTagBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   fontSize: '12px',
   fontWeight: '600',
   borderRadius: '8px',
   color: color['primary-dark'],
   lineHeight: '100%',
   border: `1px solid ${color['primary-light']}`,
   backgroundColor: color['primary-background'],
   padding: '6px ',
})
export const AdoptTagBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   fontSize: '11px',
   fontWeight: '600',
   borderRadius: '2px',
   color: color.white,
   backgroundColor: color['primary-main'],
   lineHeight: '100%',
   padding: '4px ',
})
