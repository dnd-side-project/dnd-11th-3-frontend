import {
   MemberAPIApi,
   PageResponseAnsweredQuestionPostsResponse,
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

export const useGetPostsQuestionsAnswers = (
   dto: { pageable: Pageable },
   options?: UseQueryOptions<PageResponseAnsweredQuestionPostsResponse>,
) =>
   useQuery({
      ...options,
      queryKey: [`/members/question-posts/answers`, dto.pageable],
      queryFn: async () =>
         (
            await new MemberAPIApi(config).getAnsweredQuestionPostsByMember(
               dto.pageable,
            )
         ).data,
   })
