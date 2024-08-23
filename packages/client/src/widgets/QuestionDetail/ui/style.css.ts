import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const headerWrapperStyle = style({
   width: '100%',
   display: 'flex',
   // justifyContent: 'center',
   alignItems: 'center',

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

export const headerTitleWrappewrStyle = recipe({
   base: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 430 - LEFT_ARROW_WIDTH * 1,
      marginRight: LEFT_ARROW_WIDTH,
   },
   variants: {
      canUpdate: {
         true: {
            width: 430 - LEFT_ARROW_WIDTH * 2,
            marginRight: 0,
         },
      },
   },
   defaultVariants: {
      canUpdate: false,
   },
})

export const profileImageWrapper = style({
   borderRadius: 8,
   width: 48,
   height: 48,
   backgroundColor: color['secondary-light'],
   border: `1px solid ${color['gray-800']}`,
})

export const profileWrapper = style({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: 10,

   fontSize: 14,
   fontWeight: 600,
})

export const typoWrapper = style({ display: 'flex', flexDirection: 'column' })

export const bottomWrapper = style({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   width: '100%',
   padding: '3px 0',
})

export const bottomButtonWrapper = style({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   gap: 5,

   minWidth: 105,
})

export const answerInputWrapper = style({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-around',
   alignItems: 'flex-start',
   gap: 10,
   padding: '24px 0',
})

export const answerbuttonWrapper = style({
   width: 70,
   marginTop: 34,
})

export const answerProfileWrapper = style({
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',

   position: 'relative',
   width: 36,
   height: 36,
})

export const answerProfileBox = style({
   borderRadius: 8,
   backgroundColor: color['secondary-light'],
   border: `1px solid ${color['gray-800']}`,
   width: 30,
   height: 30,
})

export const answerMetaWrapper = style({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

export const answerUserWrapper = style({
   display: 'flex',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: 4,
})

export const answerCardWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
   alignItems: 'flex-start',
   gap: 8,
   padding: '8px 0 15px 0',
   borderBottom: `1px solid ${color['gray-800']}`,
})

export const selectAnswerWrapper = style({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   gap: 8,
})

export const selectAnswerButtonWrapper = style({
   width: 60,
})
