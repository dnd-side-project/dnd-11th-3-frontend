import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const BottomLine = style({
   borderBottom: `2px solid ${color['gray-900']}`,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
})

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '15px',
   width: '100%',
   backgroundColor: color['primary-background'],
   borderRadius: '8px',
   marginBottom: '15px',
})

export const TopWrapper = style({
   display: 'flex',
})
export const IconBox = style({})

export const TxtBox = style({ marginLeft: '8px' })

export const BottomWrapper = style({
   display: 'flex',
   marginLeft: 'auto',
   marginTop: '8px',
})
