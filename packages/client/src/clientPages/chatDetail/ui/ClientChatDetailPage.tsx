'use client'

import { ChatHeader } from '@widgets/ChatDetail'
import ChatInput from '@widgets/ChatDetail/ui/ChatInput'
import ChatRoomContainer from '@widgets/ChatDetail/ui/ChatRoomContainer'
import QuestionDetailContainer from '@widgets/ChatDetail/ui/QuestionDetailContainer'
import { useState } from 'react'
import { useFetchMemberInformation } from '@shared/api'
import { useSendMessage, useWebSocketConnection } from '@features/chat'
import { absolutePos } from './style.css'

export function ClientChatDetailPage() {
   const [chatInput, setChatInput] = useState('')

   const { data: userData } = useFetchMemberInformation()
   const { messageList, stompClientRef } = useWebSocketConnection({
      chatRoomId: 1,
   })

   const { sendMessage } = useSendMessage({ stompClientRef, chatRoomId: 1 })

   const onSubmit = (data: string) => {
      if (!data.trim()) return

      sendMessage({
         content: data,
         senderId: userData?.memberId,
         type: '텍스트',
      })

      setChatInput('')
   }

   return (
      <>
         <div className={absolutePos}>
            <ChatHeader title="채팅닉네임" />
            <div style={{ margin: '0 16px' }}>
               <QuestionDetailContainer
                  jobGroup="법원경비관리"
                  title="서류처리방식질문"
               />
               <ChatRoomContainer
                  messageList={messageList}
                  userId={userData?.memberId}
               />
            </div>
         </div>
         <ChatInput
            input={chatInput}
            setChatInput={setChatInput}
            submitSendMessage={onSubmit}
         />
      </>
   )
}
