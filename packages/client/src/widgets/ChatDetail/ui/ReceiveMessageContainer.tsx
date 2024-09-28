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
   content: string
}

function ReceiveMessageContainer({ content }: Props) {
   return (
      <div className={receiveContainer}>
         <div className={profileBox}>
            <IconCharacter size={32} />
         </div>
         <div className={nicknameBox}>
            <div className={nicknameTxt}>물먹는하마</div>
            <ReceiveMessage content={content} />
         </div>
      </div>
   )
}

export default ReceiveMessageContainer
