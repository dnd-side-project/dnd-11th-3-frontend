import { style } from '@vanilla-extract/css'

export const backgroundStyle = style({
   width: '100vw',
   height: '100vh',
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   backgroundColor: 'gray',
})

export const Container = style({
   maxWidth: '425px',
   marginLeft: 'auto',
   marginRight: 'auto',
   backgroundColor: 'white',
   width: '100%',
   height: '100%',
   position: 'relative',
})
