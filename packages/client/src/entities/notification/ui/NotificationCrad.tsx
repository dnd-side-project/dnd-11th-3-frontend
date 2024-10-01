'use client'

import { IconProfile } from '@gds/icon'
import { Typo } from '@gds/token'
import * as styles from './style.css'

interface Props {
   onClick: () => void
   isRead: boolean
   notifyMessage: React.ReactNode
   date?: React.ReactNode
}

export function NotificationCard({ isRead, notifyMessage, date }: Props) {
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
               <span className={Typo.body3.md}>{notifyMessage}</span>
            </div>
         </div>
         <div className={styles.bottom}>
            <span className={Typo.body3.md}>{date || '-'}</span>
         </div>
      </div>
   )
}
