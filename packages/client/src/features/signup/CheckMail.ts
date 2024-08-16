import axios from 'axios'
import { axiosInstance } from '@shared/api/axiosInstance'

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

export const postAuthCode = async (targetMail: string, code: string) => {
   try {
      const res = await axiosInstance.post('/auth/check-email/authCode', {
         targetEmail: targetMail,
         authCode: code,
      })
      return res
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log(error.response?.data)
      }
      return false
   }
}
