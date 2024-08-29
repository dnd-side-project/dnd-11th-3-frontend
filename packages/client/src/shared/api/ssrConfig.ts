'use server'

import { Configuration } from '@server-api/configuration'
import { cookies } from 'next/headers'

const { API_BASE_URL } = process.env

export const ssrConfig = (): Configuration => {
   const cookieStore = cookies()
   return new Configuration({
      basePath: API_BASE_URL,
      baseOptions: {
         headers: {
            Cookie: cookieStore.toString(),
         },
      },
   })
}
