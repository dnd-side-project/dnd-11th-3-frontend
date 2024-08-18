import { style } from '@vanilla-extract/css'

export const contentWrapper = style({
   width: '100%',

   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-end',
   gap: '5px',
})

export const inputWrapper = style({
   width: 292,
})

export const buttonWrapper = style({
   width: 58,
   height: '100%',
   marginBottom: 60,
})
