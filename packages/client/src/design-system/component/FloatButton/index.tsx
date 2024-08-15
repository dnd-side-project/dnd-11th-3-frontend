import React from 'react'
import { IconPlus } from '@gds/icon'
import { IconBox, TxtStyle, Wrapper } from './index.css'

export function FloatButton() {
   return (
      <div className={Wrapper}>
         <div className={IconBox}>
            <IconPlus />
         </div>
         <span className={TxtStyle}>작성하기</span>
      </div>
   )
}
