'use client'

import { useState, useEffect } from 'react'

export function useClientSideRender() {
   const [isClient, setIsClient] = useState(false)

   useEffect(() => {
      setIsClient(true)
   }, [])

   return isClient
}
