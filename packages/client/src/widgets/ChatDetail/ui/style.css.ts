import { Typo, color } from '@gds/token'
import { flexColumn } from '@shared/ui/DisplayFlex/style.css'
import { style } from '@vanilla-extract/css'

export const headerWrapperStyle = style({
   width: '390px',
   display: 'flex',
   // justifyContent: 'center',
   alignItems: 'center',
   padding: '0 16px',

   height: '60px',
   backgroundColor: '#fff',
   position: 'sticky',
   top: 0,
})

const LEFT_ARROW_WIDTH = 30
export const arrowButtonWrappewrStyle = style({
   width: LEFT_ARROW_WIDTH,
   height: 30,
   left: 0,

   display: 'flex',
   justifyContent: 'left',
   alignItems: 'center',

   cursor: 'pointer',
   ':hover': {
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
   },
})

export const headerTitleWrappewrStyle = style({
   width: 430 - LEFT_ARROW_WIDTH,
   marginRight: LEFT_ARROW_WIDTH,
   textAlign: 'center',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const questionContainer = style([
   flexColumn,
   {
      backgroundColor: color['gray-900'],
      borderRadius: '8px',
      padding: '16px',
   },
])

export const questionJobGroupTag = style({
   fontSize: '12px',
   fontWeight: '500',
   lineHeight: '16px',
   marginBottom: '6px',
   color: color['gray-300'],
})

export const goBackQuestionBtn = style([
   Typo.body2.sb,
   {
      backgroundColor: color.white,
      borderRadius: '8px',
      marginTop: '16px',
      height: '39px',
      cursor: 'pointer',
      ':hover': {
         backgroundColor: color['primary-main'],
         color: color.white,
      },
   },
])
