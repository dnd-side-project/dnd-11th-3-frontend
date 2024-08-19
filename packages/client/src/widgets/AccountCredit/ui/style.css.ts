import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

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
