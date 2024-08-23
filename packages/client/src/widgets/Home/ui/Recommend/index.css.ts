import { style } from '@vanilla-extract/css'
import { color } from '@gds/token'

export const RecommendItem = style({
   width: '300px',
   height: '174px',
   position: 'relative',
   color: color.white,
})

export const TitleStyle = style({
   width: '100%',
   fontSize: '17px',
   fontWeight: '700',
   lineHeight: '22px',
   letterSpacing: '-0.18px',
   cursor: 'pointer',
})

export const Overlay = style({
   position: 'absolute',
   top: 0,
   left: 0,
   display: 'flex',
   flexDirection: 'column',
   padding: '20px 0 20px 20px ',
   width: '150px',
   height: '180px',
   wordBreak: 'break-all',
})

export const CoinBox = style({
   marginBottom: '8px',
   display: 'flex',
   alignItems: 'center',
})

export const DetailWrapper = style({
   display: 'flex',
   alignItems: 'center',
   marginTop: 'auto',
   fontSize: '12px',
   fontWeight: '600',
   lineHeight: '16px',
})

export const NumberBox = style({
   marginRight: '8px',
   marginLeft: '4px',
})
