import { COLOR } from '@gmi-design-system/token'
import { style } from '@vanilla-extract/css'

export const NavigatorWrapper = style({
   width: '100%',
   height: '85px',
})

export const NavigatorItem = style({
   display: 'flex',
   cursor: 'pointer',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
})

export const checkedStyle = style({
   color: COLOR.gray2,
})

export const nonCheckedStyle = style({
   color: COLOR.gray4,
   selectors: {
      '&:hover': {
         color: COLOR.gray2,
      },
   },
})

export const NavIcon = style({})

export const NavText = style({
   // fontStyle
})
