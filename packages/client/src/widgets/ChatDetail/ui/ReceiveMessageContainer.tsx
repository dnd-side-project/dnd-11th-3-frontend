import React from 'react'
import { IconCharacter } from '@gds/icon'
import ReceiveMessage from './ReceiveMessage'
import {
   nicknameBox,
   nicknameTxt,
   profileBox,
   receiveContainer,
} from './style.css'

interface Props {
   content?: string
   time?: string
   senderNickName?: string
}

function ReceiveMessageContainer({ content, time, senderNickName }: Props) {
   return (
      <div className={receiveContainer}>
         <div className={profileBox}>
            <IconCharacter size={32} />
         </div>
         <div className={nicknameBox}>
            <div className={nicknameTxt}>{senderNickName}</div>
            <ReceiveMessage content={content} time={time} />
         </div>
      </div>
   )
}

export default ReceiveMessageContainer
