'use client'

import { IconAlarm } from '@gds/icon'
import { IconButton } from '@gds/component'
import * as styles from './style.css'

interface Props {
   title: React.ReactNode
   onAlarmClick: () => void
}

function ChatListHeader({ title, onAlarmClick }: Props) {
   return (
      <div className={styles.Header}>
         <div className={styles.HeaderTitle}>
            <span>{title}</span>
         </div>
         <div className={styles.IconBox}>
            <IconButton
               onClick={onAlarmClick}
               icon={<IconAlarm />}
               variant="default"
               size="small"
            />
         </div>
      </div>
   )
}

export default ChatListHeader
