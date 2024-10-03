'use client'

import { CompatClient } from '@stomp/stompjs'
import { MutableRefObject } from 'react'

interface SendMessageProps {
   stompClientRef: MutableRefObject<CompatClient | undefined>
   chatRoomId: number
}

interface MessageProps {
   content: string
   senderId?: number
   type: string
}

export const useSendMessage = ({
   stompClientRef,
   chatRoomId,
}: SendMessageProps) => {
   const sendMessage = ({ content, senderId, type }: MessageProps) => {
      const destination = `/pub/chat-rooms/${chatRoomId}`
      if (stompClientRef.current?.connected) {
         try {
            const message = {
               chatRoomId,
               senderId,
               content,
               type,
               createdAt: new Date().toISOString(),
            }
            stompClientRef.current.publish({
               destination,
               body: JSON.stringify(message),
            })
         } catch (error) {
            console.error('메시지 전송 중 오류 발생:', error)
         }
      } else {
         console.error('Stomp 클라이언트가 연결되어 있지 않습니다.')
      }
   }

   return { sendMessage }
}
