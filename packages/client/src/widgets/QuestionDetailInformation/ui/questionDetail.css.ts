import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const pageWrapper = style({
   padding: 16,
   display: 'flex',
   flexDirection: 'column',
   gap: 16,
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
