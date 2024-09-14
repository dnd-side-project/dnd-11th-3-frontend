import { style } from '@vanilla-extract/css'

export const flexJustifyCenter = style({
   display: 'flex',
   justifyContent: 'center',
})
export const flexAlignCenter = style({
   display: 'flex',
   alignItems: 'center',
})

export const flexAlignJustifyCenter = style({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

export const flexColumn = style({
   display: 'flex',
   flexDirection: 'column',
})

export const flexColumnCenter = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
})

export const flexColumnItemsCenter = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
})
