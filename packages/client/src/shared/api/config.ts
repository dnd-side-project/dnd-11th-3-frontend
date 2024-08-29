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
