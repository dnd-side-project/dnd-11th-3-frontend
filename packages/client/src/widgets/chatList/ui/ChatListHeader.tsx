import React from 'react'
import { IconAlarm } from '@gds/icon'
import * as styles from './style.css'

function ChatListHeader() {
   return (
      <div className={styles.Header}>
         <div className={styles.HeaderTitle}>
            <span>채팅</span>
         </div>
         <div className={styles.IconBox}>
            <IconAlarm />
         </div>
      </div>
   )
}

export default ChatListHeader
