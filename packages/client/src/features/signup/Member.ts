import axios from 'axios'
import { axiosInstance } from '@shared/api/axiosInstance'

export const postCheckNickname = async (nickname: string) => {
   try {
      const res = await axiosInstance.post('/auth/check-nickname', {
         nickname,
      })
      return res
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log(error.response?.data)
      }
      throw error
   }
}

export const postMemberInfo = async (
   officialEmail: string,
   nickname: string,
   jobGroup: string,
   jobCategory: string,
) => {
   try {
      const res = await axiosInstance.post('/auth/member', {
         officialEmail,
         nickname,
         jobGroup,
         jobCategory,
      })
      return res
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log(error.response?.data)
      }
      throw error
   }
}
