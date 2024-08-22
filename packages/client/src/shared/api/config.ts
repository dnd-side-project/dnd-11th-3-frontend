import { IncomingMessage } from 'http'

import { Configuration } from '@server-api/configuration'
import { useQueryClient } from '@tanstack/react-query'
import { PostTmpAccessTokenQueryKey } from './auth'

const { API_BASE_URL } = process.env

export const config = new Configuration({
   basePath: API_BASE_URL,
   baseOptions: {
      withCredentials: true, // TODO: fix after implementing authentication
      headers: {
         'Content-Type': 'application/json',
      },
   },
})

export const getTmpAuthorizedConfig = (): Configuration => {
   const queryClient = useQueryClient()

   // 쿼리 키를 사용하여 캐싱된 데이터 가져오기
   const accessToken =
      queryClient.getQueryData([PostTmpAccessTokenQueryKey]) || ''

   return new Configuration({
      basePath: process.env.API_BASE_URL,
      baseOptions: {
         withCredentials: false, // TODO: fix after implementing authentication
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
         },
      },
   })
}

export const ssrConfig = (req: IncomingMessage): Configuration => {
   return new Configuration({
      basePath: API_BASE_URL,
      baseOptions: {
         headers: {
            Cookie: req.headers.cookie,
         },
      },
   })
}
