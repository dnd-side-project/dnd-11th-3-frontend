import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const TabsWrapper = style({
   display: 'flex',
   borderBottom: `2px solid ${color['gray-800']}`,
   justifyContent: 'space-between',
   height: '50px',
   width: '100%',
})

export const TabBox = recipe({
   base: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      width: '50%',
   },
   variants: {
      borderBottom: {
         true: { borderBottom: `4px solid ${color['primary-main']} ` },
         false: { borderBottom: '4px solid transparent' },
      },
   },
})