import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import {
   APIApi,
   Pageable,
   PageResponseQuestionPostSimpleResponse,
   QuestionPostSearchCondition,
} from '@server-api/api'
import { config } from '@shared/api/config'

export const useFetchQuestions = (
   dto: {
      condition: QuestionPostSearchCondition
      pageable: Pageable
   },
   options?: UseQueryOptions<PageResponseQuestionPostSimpleResponse>,
) =>
   useQuery({
      ...options,
      queryKey: ['/question-posts/search', dto.condition, dto.pageable],
      queryFn: async () =>
         (
            await new APIApi(config).searchQuestionPost(
               dto.condition,
               dto.pageable,
            )
         ).data,
   })
