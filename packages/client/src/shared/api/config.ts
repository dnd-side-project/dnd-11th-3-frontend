import { IncomingMessage } from 'http'

import { Configuration } from '@server-api/configuration'

const { API_BASE_URL } = process.env

export const config = new Configuration({
   basePath: API_BASE_URL,
   baseOptions: {
      withCredentials: false, // TODO: fix after implementing authentication
      headers: {
         'Content-Type': 'application/json',
      },
   },
})

export const csrConfig = (): Configuration => {
   return new Configuration({
      basePath: API_BASE_URL,
      baseOptions: {
         withCredentials: false, // TODO: fix after implementing authentication
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
