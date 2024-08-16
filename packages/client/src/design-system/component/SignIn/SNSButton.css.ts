import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const Wrapper = recipe({
   base: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '22px',
      letterSpacing: '-0.18px',
   },
   variants: {
      backgroundColor: {
         kakao: { backgroundColor: '#FEE500' },
         naver: { backgroundColor: '#03C75A' },
      },
   },
})

export const LogoBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const TxtBox = recipe({
   base: {
      marginLeft: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   variants: {
      color: {
         kakao: { color: '#000' },
         naver: { color: '#FFF' },
      },
   },
})
