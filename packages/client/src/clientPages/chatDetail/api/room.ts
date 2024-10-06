import { APIApi } from '@server-api/api'
import { config } from '@shared/api'
import { useQuery } from '@tanstack/react-query'

export const useGetChatRoomInfo = (dto: { chatRoomId: number }) =>
   useQuery({
      queryKey: [`/chat-rooms/${dto.chatRoomId}`],
      queryFn: async () =>
         (await new APIApi(config).createChatRoom1(dto.chatRoomId)).data,
   })
