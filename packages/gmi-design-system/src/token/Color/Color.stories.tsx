import { style, styleVariants } from '@vanilla-extract/css'
import { COLOR } from './Color'

export default {
  title: 'Foundation/Color - Source',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-16999&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
}

export function Color() {
  return (
    <div className={colorContainer}>
      <h1>Main color</h1>
      <div className={colorWrapper}>
        <h4>Primary </h4>
        <div className={variant.primary}></div>
      </div>
    </div>
  )
}

const colorContainer = style({ padding: '1rem' })
const colorWrapper = style({ display: 'flex', gap: '15px', marginBottom: '30px' })
const colorBox = style({ width: '100px', height: '100px' })

export const variant = styleVariants(COLOR, paletteColor => [
  colorBox,
  { background: paletteColor },
])
