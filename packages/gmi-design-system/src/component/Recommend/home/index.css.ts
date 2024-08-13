import { style } from '@vanilla-extract/css'

export const RecommendItem = style({
  width: '300px',
  height: '174px',
  position: 'relative',
})

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '22px 0 22px 22px ',
  width: '150px',
  height: '180px',
  wordBreak: 'break-all',
})

export const CoinBox = style({
  marginBottom: '8px',
})

export const DetailWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
})

export const IconBox = style({})
export const NumberBox = style({
  marginLeft: '8px',
})
