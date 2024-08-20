import React from 'react'
import { IconArrowRight, IconCredit, IconCreditFill } from '@gds/icon'
import { color } from '@gds/token'
import { Divider } from '@gds/component'
import * as styles from './style.css'

function CreditWrapper() {
   return (
      <div className={styles.CreditBox}>
         <span className={styles.creditTitle}>크레딧</span>
         <hr className={styles.Line} />
         <div className={styles.creditBottomWrapper}>
            <div className={styles.AmountBox}>
               <span className={styles.creditAmount}>10000</span>
               <IconCreditFill color={color['primary-main']} />
            </div>
            <span className={styles.creditMore}>내역 보기</span>
            <IconArrowRight color={color['primary-main']} />
         </div>
      </div>
   )
}

export default CreditWrapper
