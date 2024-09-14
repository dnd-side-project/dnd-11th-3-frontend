'use client'

import { ChatHeader } from '@widgets/ChatDetail'
import ChatInput from '@widgets/ChatDetail/ui/ChatInput'
import ChatRoomContainer from '@widgets/ChatDetail/ui/ChatRoomContainer'
import QuestionDetailContainer from '@widgets/ChatDetail/ui/QuestionDetailContainer'
import { useState } from 'react'
import { absolutePos } from './style.css'

export function ClientChatDetailPage() {
   const [chatInput, setChatInput] = useState('')
   return (
      <>
         <div className={absolutePos}>
            <ChatHeader title="채팅닉네임" />
            <div style={{ margin: '0 16px' }}>
               <QuestionDetailContainer
                  jobGroup="법원경비관리"
                  title="서류처리방식질문"
               />
               <ChatRoomContainer />
            </div>
         </div>
         <ChatInput input={chatInput} setChatInput={setChatInput} />
      </>
   )
}
