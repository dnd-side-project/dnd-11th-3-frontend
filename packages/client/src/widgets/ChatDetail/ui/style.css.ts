import { Typo, color } from '@gds/token'
import {
   flexAlignJustifyCenter,
   flexColumn,
} from '@shared/ui/DisplayFlex/style.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const headerWrapperStyle = style({
   width: '390px',
   display: 'flex',
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
      margin: '0 16px',
      position: 'fixed',
      width: '358px',
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

export const sendContainer = style([
   flexColumn,
   {
      width: '100%',
      marginTop: '144px',
   },
])

export const messageBox = recipe({
   base: {
      padding: '12px 16px',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '21px',
      maxWidth: '272px',
      marginBottom: '8px',
      marginTop: '5px',
   },
   variants: {
      type: {
         send: {
            borderRadius: '15px 0 15px 15px',
            backgroundColor: color['primary-background'],
            marginLeft: 'auto',
         },
         receive: {
            borderRadius: '0 15px 15px 15px',
            backgroundColor: color['gray-800'],
            marginRight: 'auto',
         },
      },
   },
})

export const timeTxt = style({
   fontSize: '12px',
   fontWeight: '500',
   color: color['gray-400'],
   marginTop: '-5px',
})

export const marginLeftAuto = style({
   marginLeft: 'auto',
})

export const receiveContainer = style({
   display: 'flex',
   marginTop: '5px',
})

export const profileBox = style({
   backgroundColor: color['secondary-light'],
   width: '32px',
   height: '32px',
   borderRadius: '5px',
})

export const nicknameBox = style({
   marginLeft: '8px',
})

export const nicknameTxt = style({
   fontSize: '14px',
   fontWeight: '600',
   lineHeight: '16px',
   marginBottom: '8px',
})

export const chatInputBottom = style({
   width: '358px',

   position: 'absolute',
   bottom: 15,
   left: 15,
})

export const addPhotoIconBox = style([
   flexAlignJustifyCenter,
   { marginRight: '8px' },
])
