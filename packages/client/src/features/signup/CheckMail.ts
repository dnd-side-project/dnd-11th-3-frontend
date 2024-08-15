import axios from 'axios'
import { axiosInstance } from '@shared/api/axiosInstance'

export const postMail = async (targetMail: string) => {
   try {
      const res = await axiosInstance.post('/auth/check-email', {
         targetEmail: targetMail,
      })
      console.log(res)
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log(error.response?.data)
      }
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
      throw error
   }
}
