import { colorBox, colorContainer, colorWrapper } from './color.css'

export default {
   title: 'Foundation/Color - Source',
}

export function Color() {
   return (
      <div className={colorContainer}>
         <h1>Main color</h1>
         <div className={colorWrapper}>
            <h4>Primary </h4>
            <div className={colorBox} />
         </div>
      </div>
   )
}
