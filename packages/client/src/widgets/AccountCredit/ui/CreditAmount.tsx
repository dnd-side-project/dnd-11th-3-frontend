import { IconCredit } from '@gds/icon'
import Image from 'next/image'
import { color } from '@gds/token'
import { formatNumberWithCommas } from '@shared/utils/formatNumberWithCommas'
import CreditBackgroundImg from 'public/asset/creditBackground.svg'
import * as styles from './style.css'

interface Prop {
   creditAmount?: number
}

function CreditAmount({ creditAmount }: Prop) {
   return (
      <div className={styles.CreditBackground}>
         <Image src={CreditBackgroundImg} alt="credit background" />
         <div className={styles.CreditBox}>
            <span className={styles.CreditTxt}>크레딧</span>
            <div className={styles.CreditAmountBox}>
               {formatNumberWithCommas(creditAmount || 0)}
               <div className={styles.CreditIconBox}>
                  <IconCredit color={color['primary-main']} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CreditAmount
