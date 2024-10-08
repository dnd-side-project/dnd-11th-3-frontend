import {
   APIApi,
   PageResponseAnswerDetailResponse,
   RegisterAnswerRequest,
} from '@server-api/api'
import { config } from '@shared/api'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 *
 * @description answers belong to question of questionPostId
 */
export const useFetchAnswers = (
   dto: { questionPostId: number },
   options?: UseQueryOptions<PageResponseAnswerDetailResponse>,
) =>
   useQuery({
      ...options,
      queryKey: [`/question-posts/${dto.questionPostId}/answers`],
      queryFn: async () =>
         (
            await new APIApi(config).getAnswersByQuestionPostId1(
               dto.questionPostId,
            )
         ).data,
   })

/**
 *
 * @description create single answer for the question with the questionPostId
 */
export const usePostAnswer = () => {
   return useMutation({
      mutationFn: async ({
         questionPostId,
         registerAnswerRequest,
      }: {
         questionPostId: number
         registerAnswerRequest: RegisterAnswerRequest
      }) =>
         (
            await new APIApi(config).registerAnswer(
               questionPostId,
               registerAnswerRequest,
            )
         ).data,
   })
}

/**
 *
 * @description 답변 채택 기능 writer of the question select single answer (only a single answer)
 */
export const usePostSelectedAnswerForQuestion = () => {
   return useMutation({
      mutationFn: async ({ answerId }: { answerId: number }) =>
         (await new APIApi(config).getAnswersByQuestionPostId(answerId)).data,
   })
}
