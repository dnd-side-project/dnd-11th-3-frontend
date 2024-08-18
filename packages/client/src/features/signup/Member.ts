import axios, { AxiosResponse } from 'axios'
import { axiosInstance } from '@shared/api/axiosInstance'

interface CheckNicknameResponse {
   isDuplicated: boolean
}

export const postCheckNickname = async (
   nickname: string,
): Promise<CheckNicknameResponse | false> => {
   try {
      const response: AxiosResponse<CheckNicknameResponse> =
         await axiosInstance.post<CheckNicknameResponse>(
            '/auth/check-nickname',
            { nickname },
         )

      return response.data
   } catch (error) {
      if (axios.isAxiosError(error)) {
         console.log(error.response?.data)
      }
      return false
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
