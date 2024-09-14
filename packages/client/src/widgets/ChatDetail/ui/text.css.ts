import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

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

export const textInputContainerStyle = style({
   width: '100%',
   backgroundColor: color.white,
   display: 'flex',
   flexDirection: 'column',
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
      size: {
         medium: {
            fontSize: 16,
            fontWeight: 500,
            padding: '12px 15px',
         },
         large: { padding: '14px 15px' },
      },
      color: {
         default: {
            border: '1px solid #e0e0e0',
         },
         filled: {
            color: color['gray-100'],
            backgroundColor: INPUT_BG_COLOR.filled,
            border: `1px solid ${color['primary-main']}`,
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
      size: 'large',
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
