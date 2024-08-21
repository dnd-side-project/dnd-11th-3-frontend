import { useMutation } from '@tanstack/react-query'

import { AuthCodeRequest, MailAPIApi, SendMailRequest } from '@server-api/api'
import { getTmpAuthorizedConfig, config } from '@shared/api/config'

export const useSendVerificationCodeByEmail = () => {
   return useMutation({
      mutationFn: async (dto: SendMailRequest) =>
         (await new MailAPIApi(config).sendAuthCodeToMail({ ...dto })).data,
   })
}

export const useVerifyCode = () => {
   return useMutation({
      mutationFn: async (dto: AuthCodeRequest) =>
         (
            await new MailAPIApi(config).verifyMailAuthCode({
               ...dto,
            })
         ).data,
   })
}
