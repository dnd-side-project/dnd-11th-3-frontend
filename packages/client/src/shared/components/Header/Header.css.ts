import { style } from '@vanilla-extract/css'

export const HeaderWrapper = style({
   display: 'flex',
   width: '100%',
   minWidth: '375px',
   height: '46px',
   top: '0px',
   position: 'absolute',
})

export const HeaderInner = style({
   width: '100%',
   height: '100%',
   position: 'relative',
   display: 'flex',
   alignItems: 'center',
})

export const BackButton = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   position: 'absolute',
   top: '8px',
   left: '10px',
   border: 'none',
   backgroundColor: 'transparent',
   marginRight: 'auto',
})

export const HeaderTitle = style({
   // TODO: 디자인시스템 적용하기
   // color:
   // font-style:
   cursor: 'default',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: 'auto',
   marginRight: 'auto',
})
