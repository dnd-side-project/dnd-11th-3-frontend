import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import {
   APIApi,
   Pageable,
   PageResponseQuestionPostSimpleResponse,
} from '@server-api/api'
import { config } from '@shared/api/config'

export const useRecommendList = (
   dto: {
      pageable: Pageable
   },
   options?: UseQueryOptions<PageResponseQuestionPostSimpleResponse>,
) =>
   useQuery({
      ...options,
      queryKey: ['/question-posts/recommends', dto.pageable],
      queryFn: async () =>
         (await new APIApi(config).getRecommendQuestionPosts(dto.pageable))
            .data as PageResponseQuestionPostSimpleResponse,
   })
