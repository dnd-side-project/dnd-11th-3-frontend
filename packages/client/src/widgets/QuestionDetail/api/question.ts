import { APIApi } from "@server-api/api";
import { config } from "@shared/api";
import {
    useMutation,
    useQuery,
    useQueryClient,
    UseQueryOptions,
 } from '@tanstack/react-query'
// /api/question-posts/{questionPostId}
//getQuestionPostById



 
 export const useFetchQuestionPost = (
    dto:{questionPostId:number},
    options: UseQueryOptions,
 ) =>
    useQuery({
       ...options,
       queryKey: [`/question-posts/${dto.questionPostId}`],
       queryFn: async () =>
          (
             await new APIApi(config).getQuestionPostById(dto.questionPostId)
          ).data,
    })
