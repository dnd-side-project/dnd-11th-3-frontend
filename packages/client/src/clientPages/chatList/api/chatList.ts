import { APIApi, Pageable, ChatRoomSimpleResponse } from '@server-api/api'
import { config } from '@shared/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { RawAxiosRequestConfig } from 'axios'

interface PageResponseChatListResponse {
   content?: Array<ChatRoomSimpleResponse>
   size?: number
   hasNext?: boolean
}

export const useGetChatLists = (
   dto: { pageable: Pageable; status: '수락됨' | '요청중' },
   options?: UseQueryOptions<PageResponseChatListResponse>,
) =>
   useQuery({
      queryKey: [`/chat-rooms`],
      queryFn: async () => {
         const axiosConfig: RawAxiosRequestConfig = {
            params: {
               ...dto.pageable,
               status: dto.status,
            },
         }
         const response = await new APIApi(config).getChatRoomsByMember(
            axiosConfig,
         )

         // 데이터 반환 타입을 단일 객체로 설정
         return response.data as PageResponseChatListResponse
      },
      ...options,
   })
