'use client'

import { IconProfile } from '@gds/icon'
import { Typo } from '@gds/token'
import * as styles from './style.css'

interface Props {
   isRead: boolean
}

export function NotificationCard({ isRead }: Props) {
   return (
      <div
         className={styles.container}
         style={{
            cursor: isRead ? 'not-allowed' : 'pointer',
         }}
      >
         <div className={styles.top}>
            <div className={styles.profileWrapper}>
               {!isRead && <IconProfile size={32} />}
            </div>
            <span className={styles.circle} />
            <div className={styles.message}>
               <span className={Typo.body3.md}>
                  TODO: 누구누구님이 답변을 남겼습니다.TODO: 누구누구님이 답변을
                  남겼습니다.TODO: 누구누구님이 답변을 남겼습니다.TODO:
                  누구누구님이 답변을 남겼습니다.TODO: 누구누구님이 답변을
                  남겼습니다.
               </span>
            </div>
         </div>
         <div className={styles.bottom}>
            <span className={Typo.body3.md}>{new Date().toLocaleString()}</span>
         </div>
      </div>
   )
}
