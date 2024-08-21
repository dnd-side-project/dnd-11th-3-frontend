import { style } from '@vanilla-extract/css'

export const contentWrapper = style({
   width: '100%',

   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   gap: '5px',
})

export const inputWrapper = style({
   maxWidth: 292,
})

export const buttonWrapper = style({
   minWidth: 58,
   height: '100%',
   marginTop: 34,
})
