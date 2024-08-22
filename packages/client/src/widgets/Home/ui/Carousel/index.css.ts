import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const RecommendContentBox = style({
   width: '358px',
   marginTop: '20px',
   margin: '15px auto 0',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   overflow: 'hidden',
})

export const RecommendItem = style({
   width: '300px',
   height: '174px',
   position: 'relative',
})

export const ArrowBox = style({
   color: color['primary-main'],
   marginRight: '10px',
})
