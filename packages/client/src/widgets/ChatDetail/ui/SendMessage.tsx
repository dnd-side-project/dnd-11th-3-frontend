import React from 'react'
import { marginLeftAuto, messageBox, timeTxt } from './style.css'

function SendMessage() {
   return (
      <>
         <div className={messageBox({ type: 'send' })}>
            <span>보낸메세지</span>
         </div>
         <div className={marginLeftAuto}>
            <div className={timeTxt}>16:20</div>
         </div>
      </>
   )
}

export default SendMessage
