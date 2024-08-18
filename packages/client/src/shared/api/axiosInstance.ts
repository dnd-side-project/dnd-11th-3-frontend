import axios from 'axios'
import { getAccessToken } from '../utils/tokenHandler'

const accessToken = getAccessToken()

export const axiosInstance = axios.create({
   baseURL: process.env.NEXT_PUBLIC_SWAGGER_API,
   headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
   },
})
