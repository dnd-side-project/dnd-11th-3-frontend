import { style } from '@vanilla-extract/css'

export const headerWrapperStyle = style({
   width: '390px',
   display: 'flex',
   // justifyContent: 'center',
   alignItems: 'center',
   padding: '0 16px',

   height: '60px',
   backgroundColor: '#fff',
   position: 'sticky',
   top: 0,
})

const LEFT_ARROW_WIDTH = 30
export const arrowButtonWrappewrStyle = style({
   width: LEFT_ARROW_WIDTH,
   height: 30,
   left: 0,

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
   width: 430 - LEFT_ARROW_WIDTH,
   marginRight: LEFT_ARROW_WIDTH,
   textAlign: 'center',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})
