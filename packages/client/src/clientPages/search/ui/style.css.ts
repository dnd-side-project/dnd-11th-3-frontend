import { style } from '@vanilla-extract/css'

export const Container = style({
   display: 'flex',
   flexDirection: 'column',
})

export const MulitSelectBox = style({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '-57px',
})

export const SearchCountBox = style({
   display: 'flex',
   alignItems: 'center',
   padding: '16px 16px 0 16px',
   fontSize: '18px',
   fontWeight: '600',
   lineHeight: '22px',
})

export const QuestionContainer = style({
   padding: '0 16px',
})
