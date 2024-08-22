import { RegisterQuestionPostRequest, APIApi } from '@server-api/api'
import { useMutation } from '@tanstack/react-query'

import { config } from '@shared/api'

export const usePostQuestion = () => {
   return useMutation({
      mutationFn: async (dto: RegisterQuestionPostRequest) =>
         (await new APIApi(config).registerQuestionPost(dto)).data,
   })
}
