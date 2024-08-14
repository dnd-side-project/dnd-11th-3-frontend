import { style } from '@vanilla-extract/css'
import { color } from '../../token/Color/color'

export const CreditBox = style({
  backgroundColor: color['secondary-dark'],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px',
  width: '48px',
  height: '19px',
  fontSize: '11px',
  fontWeight: '600',
  borderRadius: '2px',
  color: color['white'],
  lineHeight: '100%',
})

export const TextSpan = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const IconBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '2px',
})
