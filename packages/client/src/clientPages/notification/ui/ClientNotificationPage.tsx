'use client'

import { NotificationCard } from '@entities/notification'
import { MainLoader } from '@shared/ui'
import { NotificationResponse } from '@server-api/api'
import { useInfiniteScrollNotifictaion } from '../hook/useInfiniteScrollNotifictaion'
import * as styles from './style.css'
import { usePatchNotification } from '../api/notification'

export function ClientNotificationPage() {
   const { data, isFetchingNextPage, status } =
      useInfiniteScrollNotifictaion(10)

   const formatdNotification = (
      notificationRes: NotificationResponse,
   ): { message: string; date: string } => {
      const res = {
         date: notificationRes.createdAt
            ? new Date(notificationRes.createdAt).toLocaleString()
            : '-',
      }

      switch (notificationRes.type) {
         case '답변':
            return {
               ...res,
               message: `"${notificationRes.triggerMemberNickName}"님이 답변을 남겼습니다.`,
            }
         case '채택':
            return {
               ...res,
               message: `"${notificationRes.triggerMemberNickName}"님이 답변을 채택했습니다. 크레딧이 적립됩니다.`,
            }
         case '채팅':
            return {
               ...res,
               message: `"${notificationRes.triggerMemberNickName}"님에게 채팅이 도착했습니다.`,
            }
         default:
            return { ...res, message: `[ERROR] 잘못된 타입의 알림입니다.` }
      }
   }

   const { mutate: patchNotification } = usePatchNotification()

   return (
      <div className={styles.container}>
         <MainLoader loading={isFetchingNextPage} />
         {status === 'success' &&
            data.pages.map((page, pageIndex) => (
               <div key={pageIndex}>
                  {page.content.map((notification) => {
                     const foramtted = formatdNotification(notification)
                     return (
                        <NotificationCard
                           onClick={() => {
                              if (notification.isRead) {
                                 return
                              }
                              patchNotification(
                                 {
                                    notificationId: Number(
                                       notification.notificationId,
                                    ),
                                 },
                                 {
                                    onError: (error) => alert(error.message),
                                 },
                              )
                           }}
                           key={notification.notificationId}
                           notifyMessage={foramtted.message}
                           date={foramtted.date}
                           isRead={notification.isRead || false}
                        />
                     )
                  })}
               </div>
            ))}
      </div>
   )
}
