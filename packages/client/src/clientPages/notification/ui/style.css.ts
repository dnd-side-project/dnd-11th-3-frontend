import { style } from '@vanilla-extract/css'

export const container = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'flex-start',

   width: '100%',
   gap: 8,
})
