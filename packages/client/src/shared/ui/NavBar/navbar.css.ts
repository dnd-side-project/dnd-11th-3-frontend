import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const navbarWrapperStyle = style({
   width: '390px',
   height: '85px',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   gap: 50,

   padding: '9px 70px 25px 70px',
   borderTop: '1px solid #E7E7E7',
   position: 'absolute',
   bottom: 0,
   backgroundColor: color.white,

   fontSize: '10px',
   fontWeight: '500',
   lineHeight: '13px',
})

export const navbarSelectedStyle = recipe({
   base: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
   },
   variants: {
      color: {
         true: { color: color['gray-200'] },
         false: { color: color['gray-400'] },
      },
   },
})
