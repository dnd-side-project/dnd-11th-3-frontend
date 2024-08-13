import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '15px',
   width: '90%',
   backgroundColor: color['primary-background'],
   borderRadius: '8px',
})

export const TopWrapper = style({
   display: 'flex',
})
export const IconBox = style({})

export const TxtBox = style({ marginLeft: '8px' })

export const BottomWrapper = style({
   display: 'flex',
   marginLeft: 'auto',
})
