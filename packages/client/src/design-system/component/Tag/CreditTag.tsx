import React from 'react'
import { IconOrangeCredit } from '@gds/icon'
import { CreditBox, IconBox, TextSpan } from './index.css'

export interface CreditProps {
   coin: string
}

export function CreditTag({ coin }: CreditProps) {
   return (
      <div className={CreditBox}>
         <span className={TextSpan}>{coin}</span>
         <div className={IconBox}>
            <IconOrangeCredit />
         </div>
      </div>
   )
}
