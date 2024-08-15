import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const HomeWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '0 16px',
})

export const RecommendWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
})

export const RecommendHeaderBox = style({
   display: 'flex',
   width: '100%',
})

export const RecommendTitle = style({
   marginRight: 'auto',
   display: 'flex',
   alignItems: 'center',
   fontSize: '18px',
   fontWeight: '600',
   color: color['gray-100'],
})
export const MoreBox = style({
   marginLeft: 'auto',
   width: '52px',
})

export const RecommendContentBox = style({
   width: '100%',
   marginTop: '20px',
   display: 'flex',
   flexDirection: 'column',
   padding: '0 16px',
})

export const RecommendItem = style({
   width: '300px',
   height: '174px',
   position: 'relative',
})

export const overlay = style({
   position: 'absolute',
   top: 0,
   left: 0,
})

export const Line = style({
   backgroundColor: color['gray-900'],
   height: '4px',
   width: '100%',
   border: 'none',
   margin: '30px 0',
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

export const QuestionFilterBox = style({ display: 'flex' })

export const QuestionsWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   marginBottom: '85px',
})

export const fixedNav = style({
   position: 'fixed',
   top: 0,
   zIndex: 999,
   backgroundColor: '#FFf',
   width: '358px',
   display: 'flex',
   justifyContent: 'center',
   paddingTop: '20px',
})

export const ArrowBox = style({
   color: color['primary-main'],
   marginRight: '30px',
})
