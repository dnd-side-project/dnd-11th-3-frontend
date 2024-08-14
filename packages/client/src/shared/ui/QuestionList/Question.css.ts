import { color } from 'gmi-design-system'
import { style } from '@vanilla-extract/css'

export const QuestionWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   borderBottom: `2px solid ${color['gray-900']}`,
   marginTop: '23px',
})

export const QuestionTagWrapper = style({
   display: 'flex',
})

export const QuestionTitleBox = style({
   marginTop: '12px',
   marginBottom: '6px',
})

export const QuestionContentBox = style({
   marginBottom: '16px',
})

export const QuestionBottomWrapper = style({
   display: 'flex',
})

export const QuestionDateBox = style({
   display: 'flex',
})

export const QuestionDetailBox = style({
   marginLeft: 'auto',
   display: 'flex',
   marginBottom: '16px',
})

export const QuestionIconBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: '8px',
})

export const QuestionIconTxtBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: '4px',
})
