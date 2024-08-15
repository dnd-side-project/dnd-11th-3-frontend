import { style } from '@vanilla-extract/css'
import { color } from '@gds/token'

export const QuestionWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   borderBottom: `2px solid ${color['gray-900']}`,
   marginTop: '23px',
})

export const QuestionTagWrapper = style({
   display: 'flex',
})

export const TagBox = style({
   marginLeft: '4px',
})

export const QuestionTitleBox = style({
   marginTop: '12px',
   marginBottom: '6px',
   fontSize: '16px',
   fontWeight: '600',
   color: color['gray-100'],
})

export const QuestionContentBox = style({
   marginBottom: '16px',
   color: '#4b4b4b',
   fontSize: '14px',
   fontWeight: '500',
   lineHeight: '18px',
})

export const QuestionBottomWrapper = style({
   display: 'flex',
})

export const QuestionDateBox = style({
   display: 'flex',
   color: '#4b4b4b',
   fontSize: '12px',
   fontWeight: '500',
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
   fontSize: '12px',
   fontWeight: '600',
   color: color['gray-200'],
})
