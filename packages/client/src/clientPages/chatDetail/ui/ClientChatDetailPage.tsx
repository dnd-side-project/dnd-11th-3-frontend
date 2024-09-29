'use client'

import { ChatHeader } from '@widgets/ChatDetail'
import ChatInput from '@widgets/ChatDetail/ui/ChatInput'
import ChatRoomContainer from '@widgets/ChatDetail/ui/ChatRoomContainer'
import QuestionDetailContainer from '@widgets/ChatDetail/ui/QuestionDetailContainer'
import { useState } from 'react'
import { useFetchMemberInformation } from '@shared/api'
import { useSendMessage, useWebSocketConnection } from '@features/chat'
import { ChatMessageResponse } from '@server-api/api'
import { absolutePos } from './style.css'
import { useGetChatRoomInfo } from '../api/room'
import { useGetChatMessages } from '../api/messages'

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

   const {
      data: chatMessagesData,
      isError: chatMessagesIsError,
      error: chatMessagesError,
   } = useGetChatMessages({
      chatRoomId,
      pageable: {
         page: 0,
         size: 10,
      },
   })

   const [messages, setMessages] = useState<ChatMessageResponse[]>(
      chatMessagesData?.content || [],
   )

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
                  messageList={chatMessagesData?.content}
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
