import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token/Color/color'

export const dividerWrapper = recipe({
   base: {
      width: '100%',
   },

   variants: {
      variant: {
         primary: {
            border: `1px solid ${color['primary-main']}`,
         },
         secondary: {
            border: `1px solid ${color['secondary-main']}`,
         },
         default: {
            border: `1px solid ${color['gray-800']}`,
         },
      },
   },
   defaultVariants: {
      variant: 'primary',
   },
})
