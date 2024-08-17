import { style } from '@vanilla-extract/css'
import { color } from '../../token/Color/color'

export const CreditBox = style({
  backgroundColor: color['secondary-main'],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px',
  width: '48px',
  height: '19px',
  fontSize: '11px',
  fontWeight: '600',
  borderRadius: '2px',
  color: color.white,
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

export const JobListBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '11px',
  fontWeight: '600',
  borderRadius: '2px',
  color: color['secondary-dark'],
  lineHeight: '100%',
  border: `1px solid ${color['gray-800']}`,
  padding: '0 4px ',
})

export const JobGreenTagBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: '600',
  borderRadius: '8px',
  color: color['primary-dark'],
  lineHeight: '100%',
  border: `1px solid ${color['primary-light']}`,
  backgroundColor: color['primary-background'],
  padding: '6px ',
})
export const AdoptTagBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '11px',
  fontWeight: '600',
  borderRadius: '2px',
  color: color.white,
  backgroundColor: color['primary-main'],
  lineHeight: '100%',
  padding: '4px ',
})
