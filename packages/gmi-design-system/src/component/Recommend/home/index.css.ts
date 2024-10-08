import { style } from '@vanilla-extract/css'
import { color } from '../../../token/Color/color'

export const RecommendItem = style({
  width: '300px',
  height: '174px',
  position: 'relative',
  color: color['white'],
})

export const TitleStyle = style({
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '22px',
  letterSpacing: '-0.18px',
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
  fontSize: '12px',
  fontWeight: '600',
  lineHeight: '16px',
})

export const IconBox = style({})
export const NumberBox = style({
  marginRight: '8px',
  marginLeft: '4px',
})
