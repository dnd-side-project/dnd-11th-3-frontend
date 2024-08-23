import { APIApi, UpdateQuestionPostRequest } from '@server-api/api'
import { config } from '@shared/api'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'
// /api/question-posts/{questionPostId}
// getQuestionPostById

export const useFetchQuestionPost = (
   dto: { questionPostId: number },
   options: UseQueryOptions,
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
 * @description update question post
 */
export const usePatchQuestion = () => {
   return useMutation({
      mutationFn: async ({
         questionPostId,
         questionData,
      }: {
         questionPostId: number
         questionData: UpdateQuestionPostRequest
      }) =>
         (
            await new APIApi(config).updateQuestionPosts(
               questionPostId,
               questionData,
            )
         ).data,
   })
}
