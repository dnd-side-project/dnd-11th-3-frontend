import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
})

export const CreditBackground = style({
   display: 'flex',
   alignItems: 'center',
   position: 'relative',
   width: '358px',
   margin: '16px',
})

export const CreditBox = style({
   position: 'absolute',
   display: 'flex',
   width: '100%',
   color: color.white,
})

export const CreditTxt = style({
   fontSize: '22px',
   fontWeight: '600',
   lineHeight: '24px',
   marginLeft: '20px',
   display: 'flex',
   alignItems: 'center',
})

export const CreditAmountBox = style({
   marginLeft: 'auto',
   display: 'flex',
   fontSize: '25px',
   fontWeight: '600',
   lineHeight: '30px',
   alignItems: 'center',
})

export const CreditIconBox = style({
   marginLeft: '6px',
   marginRight: '20px',
})

export const CreditsContainer = style({})

export const SelectBox = style({
   margin: '10px 0',
})

export const DateTxt = style({
   fontSize: '12px',
   fontWeight: '500',
   lineHeight: '16px',
   marginTop: '16px',
   paddingLeft: '16px',
})

export const CreditContainer = style({
   display: 'flex',
   alignItems: 'center',
   margin: '24px 16px',
})

export const CreditInfoBox = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   marginLeft: '12px',
})

export const CreditTitle = style({
   fontSize: '14px',
   color: color['gray-100'],
   fontWeight: '600',
   lineHeight: '16px',
})

export const CreditTime = style({
   color: color['gray-400'],
   fontSize: '12px',
   fontWeight: '500',
   lineHeight: '16px',
   marginTop: '2px',
})

export const CreditAmount = recipe({
   base: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '24px',
      letterSpacing: '-0.2px',
      marginLeft: 'auto',
   },
   variants: {
      color: {
         plus: { color: color['primary-main'] },
         minus: { color: color['gray-100'] },
      },
   },
})
