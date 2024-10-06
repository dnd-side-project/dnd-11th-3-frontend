import { APIApi, Pageable } from '@server-api/api'
import { config } from '@shared/api'
import { useQuery } from '@tanstack/react-query'

export const useGetChatMessages = (dto: {
   chatRoomId: number
   pageable: Pageable
}) =>
   useQuery({
      queryKey: [`/chat-messages/${dto.chatRoomId}`],
      queryFn: async () =>
         (
            await new APIApi(config).getChatMessages(
               dto.chatRoomId,
               dto.pageable,
            )
         ).data,
   })
