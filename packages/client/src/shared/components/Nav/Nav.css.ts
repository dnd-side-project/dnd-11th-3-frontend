import { COLOR } from '@gmi-design-system/token'
import { style } from '@vanilla-extract/css'

export const NavigatorWrapper = style({
   width: '100%',
   height: '85px',
   display: 'flex',
   justifyContent: 'space-around',
   borderTop: `1px solid ${COLOR.gray7}`,
   position: 'fixed',
   bottom: '0',
   left: '0',
   right: '0',
   maxWidth: '425px',
   marginLeft: 'auto',
   marginRight: 'auto',
})

export const NavigatorItem = style({
   display: 'flex',
   cursor: 'pointer',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   border: 'none',
   backgroundColor: 'transparent',
   width: '58px',
})

export const checkedStyle = style({
   color: COLOR.gray2,
})

export const nonCheckedStyle = style({
   color: COLOR.gray4,
})

export const NavIcon = style({
   height: '30px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: '2px',
})

export const NavText = style({
   // TODO: 폰트 스타일 적용
})
