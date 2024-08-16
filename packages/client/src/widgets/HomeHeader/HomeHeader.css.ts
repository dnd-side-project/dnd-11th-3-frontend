import { style } from '@vanilla-extract/css'
import { color } from '@gds/token'

export const homeheaderWrapper = style({
   width: '358px',
   display: 'flex',
   alignItems: 'center',

   height: '60px',
   top: 0,
})

export const homelogoBox = style({
   marginRight: '12px',
})

export const categoryWrapper = style({
   display: 'flex',
})

export const categoryTitle = style({
   fontSize: '18px',
   fontWeight: '600',
   color: color['gray-100'],
})

export const categoryDownBtn = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const categoryFilterWrapper = style({
   position: 'absolute',
   left: 50,
   top: 50,
})

export const categoryFilterTitle = style({})

export const headerButtonWrapper = style({
   marginLeft: 'auto',
   display: 'flex',
})

export const headerIconBox = style({})
