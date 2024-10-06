'use client'

import { ChatHeader } from '@widgets/ChatDetail'
import ChatInput from '@widgets/ChatDetail/ui/ChatInput'
import ChatRoomContainer from '@widgets/ChatDetail/ui/ChatRoomContainer'
import QuestionDetailContainer from '@widgets/ChatDetail/ui/QuestionDetailContainer'
import { useEffect, useState, useCallback, useRef } from 'react'
import { useFetchMemberInformation } from '@shared/api'
import { useSendMessage, useWebSocketConnection } from '@features/chat'
import { ChatMessageResponse } from '@server-api/api'
import { useRouter } from 'next/navigation'
import { absolutePos } from './style.css'
import { useGetChatRoomInfo } from '../api/room'
import { useGetChatMessages } from '../api/messages'

interface Prop {
   chatRoomId: number
}

export function ClientChatDetailPage({ chatRoomId }: Prop) {
   const [chatInput, setChatInput] = useState('')
   const messagesEndRef = useRef<HTMLDivElement>(null)
   const router = useRouter()
   const { data: userData } = useFetchMemberInformation()
   const { messageList, stompClientRef } = useWebSocketConnection({
      chatRoomId,
   })

   const {
      data: chatRoomData,
      error: chatRoomDataError,
      isError: chatRoomDataIsError,
   } = useGetChatRoomInfo({ chatRoomId })
   const {
      data: chatMessagesData,
      error: chatMessagesError,
      isError: chatMessagesIsError,
   } = useGetChatMessages({
      chatRoomId,
      pageable: {
         page: 0,
         size: 10,
      },
   })

   if (chatRoomDataIsError) {
      router.push('/chat')
      // TODO: toast로 수정 필요
      alert(chatRoomDataError.message || '서버 오류 발생')
   } else if (chatMessagesIsError) {
      router.push('/chat')
      // TODO: toast로 수정 필요
      alert(chatMessagesError.message || '서버 오류 발생')
   }

   const { sendMessage } = useSendMessage({ stompClientRef, chatRoomId })
   const [updateMessage, setUpdateMessage] = useState<ChatMessageResponse[]>([])

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
   }

   const onSubmit = useCallback(
      (data: string) => {
         if (!data.trim() || !userData?.memberId) return

         sendMessage({
            content: data,
            senderId: userData.memberId,
            type: '텍스트',
         })

         setChatInput('')
      },
      [sendMessage, userData?.memberId],
   )

   useEffect(() => {
      if (messageList) {
         setUpdateMessage((prev) => {
            const newMessages = Array.isArray(messageList)
               ? messageList
               : [messageList]

            const uniqueNewMessages = newMessages.filter(
               (newMsg) =>
                  !prev.some(
                     (prevMsg) => prevMsg.createdAt === newMsg.createdAt,
                  ),
            )

            const updatedMessages = [...prev, ...uniqueNewMessages]
            return updatedMessages.sort(
               (a, b) =>
                  new Date(a.createdAt || '').getTime() -
                  new Date(b.createdAt || '').getTime(),
            )
         })
         scrollToBottom()
      }
   }, [messageList])

   useEffect(() => {
      if (chatMessagesData?.content) {
         setUpdateMessage(
            chatMessagesData.content.sort(
               (a, b) =>
                  new Date(a.createdAt || '').getTime() -
                  new Date(b.createdAt || '').getTime(),
            ),
         )
         scrollToBottom()
      }
   }, [chatMessagesData])

   useEffect(() => {
      scrollToBottom()
   }, [updateMessage])

   return (
      <>
         <div className={absolutePos}>
            <ChatHeader title={chatRoomData?.receiverInfo?.nickname} />
            <QuestionDetailContainer
               jobGroup={chatRoomData?.targetJobGroup}
               title={chatRoomData?.title}
               questionPostId={chatRoomData?.questionPostId}
            />
            <div
               style={{
                  margin: '0 16px',
                  overflowY: 'auto',
               }}
            >
               <ChatRoomContainer
                  messageList={updateMessage}
                  userId={userData?.memberId}
                  senderNickName={chatRoomData?.receiverInfo?.nickname}
               />
               <div ref={messagesEndRef} />
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
