// TODO: useInfiniteScrollNotifictaion
// 참고 https://oliveyoung.tech/blog/2023-10-04/useInfiniteQuery-scroll/

import {
   APIApi,
   NotificationResponse,
   PageResponseNotificationResponse,
} from '@server-api/api'
import { config } from '@shared/api'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

interface InfinitNotification {
   content: Array<NotificationResponse>
   nextPage: number
   hasNext?: boolean
}

// API 호출 함수

export const useInfiniteScrollNotifictaion = (
   countPerPage: number,
): {
   data: InfiniteData<InfinitNotification>
   status: string
   isFetchingNextPage: boolean
} => {
   const fetchNotifications = async ({ pageParam = 0 }) => {
      const response = await new APIApi(config).getNotificationsByMember(
         '전체',
         {
            page: pageParam,
            size: countPerPage,
         },
      )
      const { data } = response
      return {
         content: data.content,
         nextPage: pageParam + 1,
         hasNext: data.hasNext || false,
      }
   }

   const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
      useInfiniteQuery({
         queryKey: ['notifications'], // 쿼리 키
         queryFn: fetchNotifications, // API 호출 함수
         getNextPageParam: (lastPage: InfinitNotification) =>
            lastPage.hasNext ? lastPage.nextPage : undefined, // 다음 페이지 번호 반환
      })

   // 스크롤 이벤트 핸들러
   const handleScroll = (e) => {
      if (!e.target.scrollingElement) {
         return
      }
      const { scrollHeight, scrollTop, clientHeight } =
         e.target.scrollingElement
      if (
         scrollHeight - scrollTop <= clientHeight * 1.5 &&
         hasNextPage &&
         !isFetchingNextPage
      ) {
         fetchNextPage()
      }
   }

   // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
   useEffect(() => {
      document.addEventListener('scroll', handleScroll)
      return () => {
         document.removeEventListener('scroll', handleScroll)
      }
   }, [hasNextPage, isFetchingNextPage])
   return {
      data,
      status,
      isFetchingNextPage,
   }
}
