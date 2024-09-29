'use client'

import { useRouter } from 'next/navigation'
import { PageURL } from '@shared/model'
import { use } from 'react'
import * as styles from './style.css'
import ChatListHeader from './ChatListHeader'
import ChatInformation from './ChatInformation'

export function ChatListContainer() {
   const router = useRouter()
   const chatData = [
      {
         nickname: '물먹는 하마',
         jobGroup: '법원경비관리',
         messageContent: '가나다라마바사',
         unreadMessageCnt: 3,
         messageLastTime: '14:00',
         chatRoomId: 1,
      },
      {
         nickname: '물먹는 하마',
         jobGroup: '법원경비관리',
         messageContent: '가나다라마바사',
         unreadMessageCnt: 3,
         messageLastTime: '14:00',
         chatRoomId: 1,
      },
      {
         nickname: '물먹는 하마',
         jobGroup: '법원경비관리',
         messageContent: '가나다라마바사',
         unreadMessageCnt: 3,
         messageLastTime: '14:00',
         chatRoomId: 1,
      },
   ]
   return (
      <div className={styles.Wrapper}>
         <ChatListHeader
            title="채팅"
            onAlarmClick={() => router.push(PageURL.NOTIFICATION)}
         />
         <div className={styles.MainWrapper}>
            <div className={styles.ChatsListWrapper}>
               <span className={styles.DateTxt}>오늘</span>
               {chatData.map((chat) => {
                  return (
                     <ChatInformation
                        key={chat.chatRoomId}
                        nickname={chat.nickname}
                        jobGroup={chat.jobGroup}
                        unreadMessageCnt={chat.unreadMessageCnt}
                        messageContent={chat.messageContent}
                        messageLastTime={chat.messageLastTime}
                     />
                  )
               })}
            </div>
         </div>
      </div>
   )
}
