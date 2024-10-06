'use client'

import { ChatMessageResponse } from '@server-api/api'
import { BASE_PATH } from '@server-api/base'
import { CompatClient, Stomp } from '@stomp/stompjs'
import { useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'

export const useWebSocketConnection = ({
   chatRoomId,
}: {
   chatRoomId: number
}) => {
   const stompClientRef = useRef<CompatClient>()
   const [messageList, setMessageList] = useState<ChatMessageResponse[]>([])

   useEffect(() => {
      const socket = new SockJS(`${BASE_PATH}/ws`)
      const stompClient = Stomp.over(socket)
      stompClientRef.current = stompClient

      stompClient.connect(
         {},
         () => {
            const destination = `/sub/chat-rooms/${chatRoomId}`
            stompClient.subscribe(destination, (message) => {
               const newMessage = JSON.parse(message.body)
               setMessageList((currentList) => [...currentList, newMessage])
            })
         },
         (error: unknown) => {
            console.error('연결 오류:', error)
         },
      )
      stompClient.activate()
      return () => {
         if (stompClient) {
            stompClient.disconnect(() => {
               console.log('연결 해제됨')
            })
         }
      }
   }, [chatRoomId])

   return { messageList, stompClientRef }
}
