import { style } from '@vanilla-extract/css'

export const pageWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   gap: 36,

   padding: 16,

   color: '#2A2A2A',
   fontSize: 18,
   fontWeight: 600,
   lineHeight: 'normal',
})
