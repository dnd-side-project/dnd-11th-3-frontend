'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import useHeader from '@/shared/hooks/useHeader'
import TitleHeader from './TitleHeader'
import HomeHeader from './HomeHeader'

function FrameHeader() {
   const router = useRouter()
   const pathname = usePathname()
   const { headerTitle } = useHeader()

   const handleBack = () => {
      router.back()
   }

   switch (pathname) {
      case '/':
         return null
      case '/home':
         return <HomeHeader />
      default:
         return <TitleHeader title={headerTitle} onBack={handleBack} />
   }
}

export default FrameHeader
