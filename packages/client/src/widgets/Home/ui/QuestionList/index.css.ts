import { style } from '@vanilla-extract/css'
import { color } from '@gds/token'

export const HomeWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '0 16px',
})

export const QuestionListsWrapper = style({
   display: 'flex',
   flexDirection: 'column',
})

export const QuestionListHeaderWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   position: 'relative',
})

export const QuestionHeaderTitle = style({
   marginBottom: '16px',
   fontSize: '18px',
   fontWeight: '600',
   color: color['gray-100'],
})

export const QuestionFilterBox = style({
   display: 'flex',
   justifyContent: 'center',
})

export const QuestionsWrapper = style({
   display: 'flex',
   flexDirection: 'column',
})

export const fixedNav = style({
   position: 'fixed',
   top: 0,
   zIndex: 999,
   backgroundColor: '#FFF',
   width: '358px',
   display: 'flex',
   justifyContent: 'center',
   paddingTop: '20px',
})
