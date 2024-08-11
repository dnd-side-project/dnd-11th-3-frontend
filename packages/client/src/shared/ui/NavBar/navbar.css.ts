import { style } from '@vanilla-extract/css'

export const navbarWrapperStyle = style({
   width: '390px',
   height: '85px',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   gap: 50,

   padding: '9px 70px 25px 70px',
   backgroundColor: '#fff',
   borderTop: '1px solid #E7E7E7',
   position: 'fixed',
   bottom: 0,
})
