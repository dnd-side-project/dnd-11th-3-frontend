import React from 'react'
import { marginLeftAuto, messageBox, timeTxt } from './style.css'

interface Props {
   content: string
}

function SendMessage({ content }: Props) {
   return (
      <>
         <div className={messageBox({ type: 'send' })}>
            <span>{content}</span>
         </div>
         <div className={marginLeftAuto}>
            <div className={timeTxt}>16:20</div>
         </div>
      </>
   )
}

export default SendMessage
