import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

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

export const ArrowBox = style({
   color: color['primary-main'],
   marginRight: '30px',
})
