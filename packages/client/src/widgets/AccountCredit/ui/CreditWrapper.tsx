import React from 'react'
import { Divider } from '@gds/component'
import * as styles from './style.css'
import CreditAmount from './CreditAmount'

export function CreditWrapper() {
   return (
      <div className={styles.Wrapper}>
         <CreditAmount />
         <Divider />
      </div>
   )
}
