import { style } from '@vanilla-extract/css'

export const container = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',

   width: 358,
   minHeight: 68,
   padding: '8px 16px',
   borderBottom: '1px solid #DFDFDF',
   ':hover': {
      backgroundColor: '#F9F9F9',
      borderRadius: 8,
   },
})

export const top = style({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',

   width: '100%',
   height: 'auto',
   minHeight: 32,
   gap: 8,
})

export const profileWrapper = style({
   width: 33,
   height: 36,
   paddingTop: 3,

   position: 'relative',
})

export const message = style({
   width: 284,
   height: 'auto',
   paddingTop: 4,
   overflow: 'auto',
})

export const bottom = style({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-end',

   width: '100%',
   height: 32,
   color: '#949494',
})

export const circle = style({
   width: 8,
   height: 8,
   borderRadius: '1000%',
   backgroundColor: '#FF5757',

   position: 'absolute',
   left: 59,
})
