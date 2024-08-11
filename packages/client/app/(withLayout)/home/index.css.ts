import { style } from '@vanilla-extract/css'

export const HomeWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '0 16px',
})

export const RecommendWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
})

export const RecommendHeaderBox = style({
   display: 'flex',
   width: '100%',
})

export const RecommendTitle = style({
   marginRight: 'auto',
})
export const MoreBox = style({
   marginLeft: 'auto',
   width: '52px',
})

export const RecommendContentBox = style({
   width: '100%',
   marginTop: '10px',
})

export const RecommendItem = style({
   padding: '0 16px',
})
