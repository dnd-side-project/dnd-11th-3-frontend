import { style } from '@vanilla-extract/css'
import { color } from '@gds/token'

export const toastBase = style({
   display: 'flex',
   width: '360px',
   padding: '12px',
   justifyContent: 'space-between',
   backgroundColor: color.white,
   borderRadius: '9px',
   boxShadow:
      '0px 0px 1px 0px rgba(132, 132, 132, 0.31), 0px 2px 5px 0px rgba(70, 70, 70, 0.2)',
})

export const left = style({
   display: 'flex',
   height: '100%',
   gap: '8px',
})

export const iconContainer = style({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '18px',
   lineHeight: '18px',
})

export const closeContainer = style({
   cursor: 'pointer',
   height: '20px',
   width: '20px',
})

export const titleAndMessageContainer = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   gap: '8px',
})

export const titleContainer = style({
   display: 'flex',
   height: '17px',
   lineHeight: '17px',
})

export const messageContainer = style({
   display: 'flex',
   height: '100%',
})
