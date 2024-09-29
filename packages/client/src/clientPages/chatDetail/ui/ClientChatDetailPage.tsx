'use client'

import { ChatHeader } from '@widgets/ChatDetail'
import ChatInput from '@widgets/ChatDetail/ui/ChatInput'
import ChatRoomContainer from '@widgets/ChatDetail/ui/ChatRoomContainer'
import QuestionDetailContainer from '@widgets/ChatDetail/ui/QuestionDetailContainer'
import { useState } from 'react'
import { useFetchMemberInformation } from '@shared/api'
import { useSendMessage, useWebSocketConnection } from '@features/chat'
import { absolutePos } from './style.css'
import { useGetChatRoomInfo } from '../api/room'

interface Prop {
   chatRoomId: number
}

export function ClientChatDetailPage({ chatRoomId }: Prop) {
   const [chatInput, setChatInput] = useState('')

   const { data: userData } = useFetchMemberInformation()
   const { messageList, stompClientRef } = useWebSocketConnection({
      chatRoomId,
   })

   const {
      data: chatRoomData,
      isError: chatRoomDataIsError,
      error: chatRoomDataError,
   } = useGetChatRoomInfo({ chatRoomId })

   const { sendMessage } = useSendMessage({ stompClientRef, chatRoomId })

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
            <ChatHeader title={chatRoomData?.receiverInfo?.nickname} />
            <div style={{ margin: '0 16px' }}>
               <QuestionDetailContainer
                  jobGroup={chatRoomData?.targetJobGroup}
                  title={chatRoomData?.title}
                  questionPostId={chatRoomData?.questionPostId}
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
