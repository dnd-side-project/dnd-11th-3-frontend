import { useMutation } from '@tanstack/react-query'

import { AuthCodeRequest, MailAPIApi, SendMailRequest } from '@server-api/api'
import { getTmpAuthorizedConfig } from '@shared/api/config'

export const useSendVerificationCodeByEmail = () => {
   const tmpAuthConfig = getTmpAuthorizedConfig()
   return useMutation({
      mutationFn: async (dto: SendMailRequest) =>
         (await new MailAPIApi(tmpAuthConfig).sendAuthCodeToMail({ ...dto }))
            .data,
   })
}

export const useVerifyCode = () => {
   const tmpAuthConfig = getTmpAuthorizedConfig()
   useMutation({
      mutationFn: async (dto: AuthCodeRequest) =>
         (
            await new MailAPIApi(tmpAuthConfig).verifyMailAuthCode({
               ...dto,
            })
         ).data,
   })
}
