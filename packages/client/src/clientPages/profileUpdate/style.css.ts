import { flexColumn } from '@shared/ui/DisplayFlex/style.css'
import { style } from '@vanilla-extract/css'

export const pageContainer = style([
   flexColumn,
   {
      padding: '0 16px 16px',
      height: '800px',
   },
])

export const marginBox = style({
   marginTop: 'auto',
})
