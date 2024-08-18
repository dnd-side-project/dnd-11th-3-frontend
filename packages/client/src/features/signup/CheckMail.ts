import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from '@shared/api/axiosInstance'

interface PostAuthCodeResponse {
   result: boolean
}

export const postMail = async (
   targetMail: string,
   setEmailState: (emailState: 'before' | 'available' | 'duplicated') => void,
) => {
   try {
      await axiosInstance.post('/auth/check-email', {
         targetEmail: targetMail,
      })
      setEmailState('available')

      return true
   } catch (error) {
      if (axios.isAxiosError(error)) {
         setEmailState('duplicated')
         console.log(error.response?.data)
         return false
      }
      return false
   }
}

export const postAuthCode = async (
   targetMail: string,
   code: string,
): Promise<PostAuthCodeResponse | false> => {
   try {
      const response: AxiosResponse<PostAuthCodeResponse> =
         await axiosInstance.post<PostAuthCodeResponse>(
            '/auth/check-email/authCode',
            {
               targetEmail: targetMail,
               authCode: code,
            },
         )

      return response.data
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log(error.response?.data)
      }
      return false
   }
}
