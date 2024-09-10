import React from 'react'
import { IconArrowRight, IconCreditFill } from '@gds/icon'
import { color } from '@gds/token'
import * as styles from './style.css'

interface Prop {
   credit?: number
}

function CreditSection({ credit }: Prop) {
   return (
      <div className={styles.CreditBox}>
         <span className={styles.creditTitle}>크레딧</span>
         <hr className={styles.Line} />
         <div className={styles.creditBottomWrapper}>
            <div className={styles.AmountBox}>
               {/** TODO: 콤마함수 적용하기 */}
               <span className={styles.creditAmount}>{credit}</span>
               <IconCreditFill color={color['primary-main']} />
            </div>
            <span className={styles.creditMore}>내역 보기</span>
            <IconArrowRight color={color['primary-main']} />
         </div>
      </div>
   )
}

export default CreditSection
