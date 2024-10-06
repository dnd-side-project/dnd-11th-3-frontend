import { APIApi, CreateChatRoomRequest } from '@server-api/api'
import { config } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

export const usePostCreateChatRoom = () => {
   return useMutation({
      mutationFn: async ({
         questionPostId,
         answerId,
      }: {
         questionPostId: number
         answerId: number
      }) => {
         const createChatRoomRequest: CreateChatRoomRequest = {
            questionPostId,
            answererId: answerId,
         }
         return (await new APIApi(config).createChatRoom(createChatRoomRequest))
            .data
      },
   })
}
