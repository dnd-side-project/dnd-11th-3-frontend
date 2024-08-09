'use client'

import { useRouter, usePathname } from 'next/navigation'
import Nav from './Nav'

function FrameNavigator() {
   const router = useRouter()
   const pathname = usePathname()

   const handleRoute = (url: string) => {
      router.push(url)
   }

   switch (pathname) {
      case '/home':
      case '/chat':
      case '/account':
      case '/':
         return <Nav curRoute={pathname} handleRoute={handleRoute} />
      default:
         return null
   }
}

export default FrameNavigator
