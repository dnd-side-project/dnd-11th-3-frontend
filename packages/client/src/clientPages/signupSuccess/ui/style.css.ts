import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   height: '100%',
   backgroundColor: color['primary-dark'],
   justifyContent: 'center',
   alignItems: 'center',
   color: color.white,
   gap: 4,
})

export const TextWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '120px',
   marginLeft: 60,
})

export const TitleTxt = style({
   marginBottom: '18px',
   display: 'flex',
   flexDirection: 'column',
})

export const LoginBtnWrapper = style({
   width: '100%',
   flexDirection: 'column',
   display: 'flex',
   padding: '0 16px',
   marginTop: '103px',
})
