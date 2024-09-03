import {
   MemberAPIApi,
   PageResponseQuestionPostsResponse,
   Pageable,
} from '@server-api/api'
import { config } from '@shared/api'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

export const useGetScrapQuestions = (
   dto: { pageable: Pageable },
   options?: UseQueryOptions<PageResponseQuestionPostsResponse>,
) =>
   useQuery({
      ...options,
      queryKey: [`/members/question-posts/bookmarks`, dto.pageable],
      queryFn: async () =>
         (await new MemberAPIApi(config).getBookmarksByMember(dto.pageable))
            .data,
   })
