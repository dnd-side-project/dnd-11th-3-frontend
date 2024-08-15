import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token/Color/color'

export const INPUT_BG_COLOR = {
   default: color.white,
   filled: color['gray-000'],
   disabled: color['gray-900'],
}
export const INPUT_COLOR = {
   default: color['gray-100'],
   filled: color['gray-100'],
   disabled: color['gray-500'],
   error: color.error,
}

export const textInputLabelStyle = style({
   marginBottom: '17px',
   fontSize: '18px',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   color: color['gray-100'],
})

export const textInputLabelContainerStyle = style({
   width: '100%',
   height: 'fit-content',
   margin: 0,
   padding: 0,
   display: 'flex',
   flexDirection: 'column',
})

export const textInputDescriptionStyle = style({
   fontSize: '0.8rem',
   color: color.error,
   marginTop: '5px',
})

export const textInputWrapperStyle = recipe({
   base: {
      width: '100%',
      padding: '14px 15px',
      borderRadius: '8px',

      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
   },

   variants: {
      color: {
         default: {
            border: '1px solid #e0e0e0',
         },
         filled: {
            color: color['gray-100'],
            backgroundColor: INPUT_BG_COLOR.filled,
            border: `1px solid ${color['gray-800']}`,
         },
         disabled: {
            cursor: 'not-allowed',
            border: `1px solid ${color['gray-800']}`,
            backgroundColor: INPUT_BG_COLOR.disabled,
         },
         error: { border: `1px solid ${color.error}` },
      },
   },

   defaultVariants: {
      color: 'default',
   },
})

export const textInputStyle = recipe({
   base: {
      width: '100%',
      color: INPUT_COLOR.default,
      border: 'none',

      fontSize: 16,
      fontWeight: 500,
      '::placeholder': {
         color: color['gray-500'],
         fontSize: 16,
         fontWeight: 500,
      },
   },

   variants: {
      color: {
         default: { backgroundColor: INPUT_BG_COLOR.default },
         filled: {
            backgroundColor: INPUT_BG_COLOR.filled,
         },
         disabled: {
            cursor: 'not-allowed',
            color: INPUT_COLOR.disabled,
            backgroundColor: INPUT_BG_COLOR.disabled,
         },
         error: { color: INPUT_COLOR.error },
      },
   },

   defaultVariants: {
      color: 'default',
   },
})

export const textMetaStyle = recipe({
   base: {
      width: '100%',
      fontSize: '14px',
      marginLeft: '5px',
      marginTop: '5px',
   },

   variants: {
      color: {
         default: { color: color['gray-400'] },
         filled: { color: color['gray-400'] },
         disabled: { color: color['gray-400'] },
         error: { color: color.error },
      },
   },

   defaultVariants: {
      color: 'default',
   },
})
