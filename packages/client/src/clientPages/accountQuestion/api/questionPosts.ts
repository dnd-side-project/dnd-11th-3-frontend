import {
   MemberAPIApi,
   PageResponseQuestionPostsResponse,
   Pageable,
} from '@server-api/api'
import { config } from '@shared/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export const useGetPostsQuestions = (
   dto: { pageable: Pageable },
   options?: UseQueryOptions<PageResponseQuestionPostsResponse>,
) =>
   useQuery({
      ...options,
      queryKey: [`/members/question-posts`, dto.pageable],
      queryFn: async () =>
         (await new MemberAPIApi(config).getQuestionPostsByMember(dto.pageable))
            .data,
   })
