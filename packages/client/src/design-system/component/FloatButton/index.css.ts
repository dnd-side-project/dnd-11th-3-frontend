import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   background: color['primary-main'],
   color: color.white,
   boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
   borderRadius: '40px',
   display: 'flex',
   padding: '11px',
   justifyContent: 'center',
   alignItems: 'center',
   width: '127px',
   position: 'absolute',
   zIndex: 999,
   bottom: 100,
   left: 250,
})

export const IconBox = style({})

export const TxtStyle = style({
   marginLeft: '8px',
   fontSize: '18px',
   fontWeight: '600',
})
