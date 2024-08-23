import { APIApi, QuestionPostDetailResponse } from '@server-api/api'
import { config } from '@shared/api'
import { AnswerMetaType } from '@shared/model'
import { useQuery, UseQueryOptions, useMutation } from '@tanstack/react-query'
// /api/question-posts/{questionPostId}
// getQuestionPostById

export const useFetchQuestionPost = (
   dto: { questionPostId: number },
   options?: Omit<UseQueryOptions<QuestionPostDetailResponse>, 'queryKey'>,
) =>
   useQuery({
      ...options,
      queryKey: [`/question-posts/${dto.questionPostId}`],
      queryFn: async () =>
         (await new APIApi(config).getQuestionPostById(dto.questionPostId))
            .data,
   })

/**
 *
 * @description create bookmark or like for the question with the questionPostId
 */
export const usePostCreateQuestionMeta = () => {
   return useMutation({
      mutationFn: async ({
         questionPostId,
         type,
      }: {
         questionPostId: number
         type: AnswerMetaType
      }) =>
         (await new APIApi(config).activateInteraction(questionPostId, type))
            .data,
   })
}

/**
 *
 * @description create bookmark or like for the question with the questionPostId
 */
export const usePostCancelQuestionMeta = () => {
   return useMutation({
      mutationFn: async ({
         questionPostId,
         type,
      }: {
         questionPostId: number
         type: AnswerMetaType
      }) =>
         (await new APIApi(config).inactivateInteraction(questionPostId, type))
            .data,
   })
}
