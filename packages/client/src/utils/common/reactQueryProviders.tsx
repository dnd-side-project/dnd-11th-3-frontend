'use client'

import { isAxiosError } from 'axios'
import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function ReactQueryClientProviders({
   children,
}: {
   children: ReactNode
}) {
   const [queryClient] = useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  refetchOnWindowFocus: false,
                  retry: (count, error: Error) => {
                     if (
                        isAxiosError(error) &&
                        error.response?.status === 401
                     ) {
                        return count < 3
                     }
                     return false
                  },
               },
            },
         }),
   )

   return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   )
}
