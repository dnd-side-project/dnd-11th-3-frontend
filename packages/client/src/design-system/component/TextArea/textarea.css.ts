import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { color } from '../../token/Color/color'

export const textAreaLabelStyle = style({
   marginBottom: '17px',
   fontSize: '18px',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   color: color['gray-100'],
})

export const textAreaLabelContainerStyle = style({
   width: '100%',
   height: 'fit-content',
   margin: 0,
   padding: 0,

   display: 'flex',
   flexDirection: 'column',
})

export const textAreaDescriptionStyle = style({
   fontSize: '0.8rem',
   color: color.error,
   marginTop: '5px',
})

export const textAreaWrapperStyle = recipe({
   base: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignContent: 'center',
      padding: '14px 15px',
      borderRadius: '8px',
   },

   variants: {
      color: {
         default: { border: '1px solid #e0e0e0' },
         disabled: {
            border: `1px solid ${color['gray-800']}`,
            backgroundColor: color['gray-900'],
         },
         error: { border: `1px solid ${color.error}` },
      },
   },

   defaultVariants: {
      color: 'default',
   },
})

export const textAreaStyle = recipe({
   base: {
      width: '100%',
      color: color['gray-100'],
      border: 'none',
      resize: 'none',
      '::placeholder': {
         color: color['gray-500'],
      },
   },

   variants: {
      color: {
         default: { color: color['gray-100'] },
         disabled: { backgroundColor: color['gray-900'] },
         error: { color: color.error },
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
         disabled: { color: color['gray-400'] },
         error: { color: color.error },
      },
   },

   defaultVariants: {
      color: 'default',
   },
})
