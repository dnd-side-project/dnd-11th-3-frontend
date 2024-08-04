import { style } from '@vanilla-extract/css'
import { COLOR } from './Color'

export const colorContainer = style({ padding: '1rem' })
export const colorWrapper = style({ display: 'flex', gap: '15px', marginBottom: '30px' })
export const colorBox = style({ width: '100px', height: '100px', backgroundColor: COLOR.primary })
