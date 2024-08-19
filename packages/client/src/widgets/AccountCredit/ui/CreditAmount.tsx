import React from 'react'
import { IconCredit } from '@gds/icon'
import Image from 'next/image'
import { color } from '@gds/token'
import { foramtNumberWithCommas } from '@shared/utils/formatNumberWithCommas'
import * as styles from './style.css'
import CreditBackgroundImg from '../../../../public/asset/creditBackground.svg'

function CreditAmount() {
   return (
      <div className={styles.CreditBackground}>
         <Image src={CreditBackgroundImg} alt="credit background" />
         <div className={styles.CreditBox}>
            <span className={styles.CreditTxt}>크레딧</span>
            <div className={styles.CreditAmountBox}>
               {foramtNumberWithCommas('10000')}
               <div className={styles.CreditIconBox}>
                  <IconCredit color={color['primary-main']} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CreditAmount
