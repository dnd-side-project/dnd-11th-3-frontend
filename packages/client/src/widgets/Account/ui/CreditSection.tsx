import React from 'react'
import { IconArrowRight, IconCreditFill } from '@gds/icon'
import { color } from '@gds/token'
import { formatNumberWithCommas } from '@shared/utils/formatNumberWithCommas'
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
               <span className={styles.creditAmount}>
                  {formatNumberWithCommas(credit || 0)}
               </span>
               <IconCreditFill color={color['primary-main']} />
            </div>
            <div className={styles.creditMore}>
               <span>내역 보기</span>
               <IconArrowRight color={color['primary-main']} size={18} />
            </div>
         </div>
      </div>
   )
}

export default CreditSection
