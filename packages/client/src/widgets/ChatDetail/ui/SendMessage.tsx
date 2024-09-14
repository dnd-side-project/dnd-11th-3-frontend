import React from 'react'
import { send } from 'process'
import { messageBox } from './style.css'

function SendMessage() {
   return <div className={messageBox({ type: 'send' })}>보낸메세지</div>
}

export default SendMessage
