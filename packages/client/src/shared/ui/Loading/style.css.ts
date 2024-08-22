import { style } from '@vanilla-extract/css'

export const loadingWrapper = style({
   position: 'fixed',
   zIndex: 1000,
   width: 390,
   height: '100%',
   backdropFilter: 'blur(4px)',

   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',

   touchAction: 'none',
})

export const spinnerWrapper = style({
   position: 'fixed',
   zIndex: 1001,
   width: 390,
   height: '100%',
   top: '40%',
   left: '45%',
})
