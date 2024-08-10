'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { AuthLayout } from '../../../src/apps/layout'
import { WITHOUT_COMMON_HEADER } from '../../../src/shared/model/navMetaData'

interface Props {
   children: React.ReactNode
}

export default function Layout({ children }: Props) {
   const pathname = usePathname()

   const showHeader = useMemo(
      () => !WITHOUT_COMMON_HEADER.includes(pathname),
      [pathname],
   )
   return (
      <AuthLayout showHeader={showHeader} pageTitle="질문 목록">
         {children}
      </AuthLayout>
   )
}
