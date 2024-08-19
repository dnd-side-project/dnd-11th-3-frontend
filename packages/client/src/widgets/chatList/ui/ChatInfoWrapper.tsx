import React from 'react'
import * as styles from './style.css'

interface ChatInfoProps {
   nickname: string
   jobGroup: string
   unreadMessageCnt: number
   messageContent: string
   messageLastTime: string
}

function ChatInfoWrapper({
   nickname,
   jobGroup,
   unreadMessageCnt,
   messageContent,
   messageLastTime,
}: ChatInfoProps) {
   return (
      <div className={styles.ChatListWrapper}>
         <div style={{ width: '48px', height: '48px' }}>
            {/** TODO: image url 들어갈 예정 */}
            profile
         </div>
         <div className={styles.ChatInfoWrapper}>
            <div className={styles.ChatTopBox}>
               <span className={styles.NickNameTxt}>{nickname}</span>
               <span className={styles.JobGroupTxt}>{jobGroup}</span>
               <div className={styles.UnreadMessageCnt}>
                  <span className={styles.CntTxt}>{unreadMessageCnt}</span>
               </div>
            </div>
            <div className={styles.ChatBottomBox}>
               <span className={styles.ChatMessage}>{messageContent}</span>
               <div className={styles.TimeBox}>
                  <span className={styles.TimeTxt}>{messageLastTime}</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChatInfoWrapper
