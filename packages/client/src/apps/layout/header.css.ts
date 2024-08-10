import { style } from '@vanilla-extract/css'

export const headerWrappewrStyle = style({
   width: '100%',
   minWidth: '390px',
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   padding: '0 16px',

   height: '60px',
   backgroundColor: '#fff',
})

const LEFT_ARROW_WIDTH = 30
export const arrowButtonWrappewrStyle = style({
   width: LEFT_ARROW_WIDTH,
   height: 30,

   display: 'flex',
   justifyContent: 'left',
   alignItems: 'center',

   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
   },
})

export const headerTitleWrappewrStyle = style({
   width: '100%',
   marginRight: LEFT_ARROW_WIDTH,

   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})
