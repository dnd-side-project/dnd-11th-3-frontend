import React from 'react'
import { marginLeftAuto, messageBox, timeTxt } from './style.css'

interface Props {
   content?: string
   time?: string
}

function SendMessage({ content, time }: Props) {
   return (
      <>
         <div className={messageBox({ type: 'send' })}>
            <span>{content}</span>
         </div>
         <div className={marginLeftAuto}>
            <div className={timeTxt}>{time?.slice(11, 16)}</div>
         </div>
      </>
   )
}

export default SendMessage
