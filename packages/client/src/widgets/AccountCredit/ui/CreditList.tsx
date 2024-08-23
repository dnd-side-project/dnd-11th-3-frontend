import { formatNumberWithCommas } from '@shared/utils/formatNumberWithCommas'
import * as styles from './style.css'

// TODO: 서버 데이터에 맞게 수정 필요
export interface CreditProps {
   profile: string
   title: string
   time: string
   creditAmount: number
   creditId: number
   isPlus: boolean
}

export function CreditList({
   profile,
   time,
   title,
   creditAmount,
   isPlus,
}: CreditProps) {
   return (
      <div className={styles.CreditContainer}>
         {/** TODO: profile 이미지 링크 넣기 */}
         <div>profile</div>
         <div className={styles.CreditInfoBox}>
            <span className={styles.CreditTitle}>{title}</span>
            <span className={styles.CreditTime}>{time}</span>
         </div>
         <span
            className={styles.CreditAmount({
               color: isPlus ? 'plus' : 'minus',
            })}
         >
            {isPlus ? '+' : '-'}
            {formatNumberWithCommas(creditAmount)}
         </span>
      </div>
   )
}
