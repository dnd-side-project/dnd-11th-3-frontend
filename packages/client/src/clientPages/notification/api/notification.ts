import {
   RegisterQuestionPostRequest,
   APIApi,
   PageResponseNotificationResponse,
} from '@server-api/api'
import {
   DefinedInitialDataInfiniteOptions,
   DefinedUseInfiniteQueryResult,
   InfiniteData,
   useInfiniteQuery,
   useMutation,
   useQuery,
   useQueryClient,
   UseQueryOptions,
   UseQueryResult,
} from '@tanstack/react-query'

import { config } from '@shared/api'

export const useFetchNotifications = (
   dto: {
      type: '전체' | '답변' | '채택' | '채팅'
      page: number
      size: number
   },
   options: Omit<UseQueryOptions<PageResponseNotificationResponse>, 'queryKey'>, // <PageResponseNotificationResponse>,
): UseQueryResult => {
   return useQuery({
      ...options,
      queryKey: [`/notifications`, dto.type, dto.page, dto.size],
      queryFn: async () =>
         (
            await new APIApi(config).getNotificationsByMember(dto.type, {
               page: dto.page,
               size: dto.size,
            })
         ).data,
   })
}

export const usePatchNotification = () => {
   return useMutation({
      mutationFn: async (dto: { notificationId: number }) =>
         (await new APIApi(config).readNotification(dto)).data,
   })
}
