import React from 'react'
import { IconArrowRight, IconCreditFill } from '@gds/icon'
import { color } from '@gds/token'
import { formatNumberWithCommas } from '@shared/utils/formatNumberWithCommas'
import { useRouter } from 'next/navigation'
import { PageURL } from '@shared/model'
import * as styles from './style.css'

interface Prop {
   credit?: number
}

function CreditSection({ credit = 0 }: Prop) {
   const router = useRouter()
   return (
      <div className={styles.CreditBox}>
         <span className={styles.CreditTitle}>크레딧</span>
         <hr className={styles.Line} />
         <div className={styles.CreditBottomWrapper}>
            <div className={styles.AmountBox}>
               <span className={styles.CreditAmount}>
                  {formatNumberWithCommas(credit)}
               </span>
               <IconCreditFill color={color['primary-main']} />
            </div>
            <button
               type="button"
               className={styles.CreditMore}
               onClick={() => {
                  router.push(PageURL.ACCOUNT_CREDIT)
               }}
            >
               <span>내역 보기</span>
               <IconArrowRight color={color['primary-main']} size={18} />
            </button>
         </div>
      </div>
   )
}

export default CreditSection
