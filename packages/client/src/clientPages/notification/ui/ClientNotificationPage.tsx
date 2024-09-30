'use client'

import { NotificationCard } from '@entities/notification'
import { MainLoader } from '@shared/ui'
import { useInfiniteScrollNotifictaion } from '../hook/useInfiniteScrollNotifictaion'
import * as styles from './style.css'

export function ClientNotificationPage() {
   const { data, isFetchingNextPage, status } =
      useInfiniteScrollNotifictaion(10)

   return (
      <div className={styles.container}>
         <MainLoader loading={isFetchingNextPage} />
         {status === 'success' &&
            data.pages.map((c, index) => (
               <NotificationCard key={c.content[0]?.targetId} isRead={false} />
            ))}
      </div>
   )
}
