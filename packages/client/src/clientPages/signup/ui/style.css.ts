import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',

   padding: '16px',
   minHeight: '760px',
})

export const contentWrapper = style({
   width: '100%',

   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-end',
})

export const inputWrapper = style({
   maxWidth: 292,
   width: '100%',
})

export const buttonWrapper = style({
   width: 58,
   height: '100%',
   marginBottom: 25,
})

export const Title = style({
   marginBottom: '18px',
})

export const InputBtnWrapper = style({
   display: 'flex',
   marginBottom: '36px',
})

export const NickNameBox = style({
   display: 'flex',
})

export const bottomSection = style({
   padding: '24px 0',

   display: 'flex',
   flexDirection: 'column',
   gap: 26,
})

export const FinalBtnBox = style({
   marginTop: 'auto',
})
