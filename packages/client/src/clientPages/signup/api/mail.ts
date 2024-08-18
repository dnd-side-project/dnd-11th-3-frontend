import { config } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

import { AuthCodeRequest, MailAPIApi, SendMailRequest } from '@server-api/api'

export const useSendVerificationCodeByEmail = () =>
   useMutation({
      mutationFn: async (dto: SendMailRequest) =>
         (await new MailAPIApi(config).sendAuthCodeToMail({ ...dto })).data,
   })

export const useVerifyCode = () =>
   useMutation({
      mutationFn: async (dto: AuthCodeRequest) =>
         (
            await new MailAPIApi(config).verifyMailAuthCode({
               ...dto,
            })
         ).data,
   })
