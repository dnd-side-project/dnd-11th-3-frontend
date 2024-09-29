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
} from '@tanstack/react-query'

import { config } from '@shared/api'

export const useFetchNotifications = (
   dto: {
      type: '전체' | '답변' | '채택' | '채팅'
      page: number
      size: number
   },
   options: Omit<
      DefinedInitialDataInfiniteOptions<PageResponseNotificationResponse>,
      'queryKey'
   >, // <PageResponseNotificationResponse>,
): DefinedUseInfiniteQueryResult<
   InfiniteData<PageResponseNotificationResponse, unknown>,
   Error
> => {
   const queryClient = useQueryClient()
   return useInfiniteQuery({
      ...options,
      // queryClient, // TODO: if you need queryClient, you can use it. or remove it.
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

// TODO: delete Best practice:
// const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery<TSearchProduct>(
//    queryKey,
//    queryFn,
//    {
//      getNextPageParam: (lastPage, allPages) => {
//      const nextPage = allPages.length + 1;

//      //상품이 0개이거나 rowsPerPage보다 작을 경우 마지막 페이지로 인식한다.
//      return lastPage?.data.count === 0 || lastPage?.data.count < rowsPerPage ? undefined : nextPage;
//    },
//      retry: 0,
//      refetchOnMount: false,
//      refetchOnReconnect: false,
//      refetchOnWindowFocus: false,
//    }
//  );

export const usePatchNotification = () => {
   return useMutation({
      mutationFn: async (dto: { notificationId: number }) =>
         (await new APIApi(config).readNotification(dto)).data,
   })
}
