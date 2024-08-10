'use client'

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { WITHOUT_COMMON_HEADER } from '@shared/model/navMetaData'
import { Header } from './Header'

interface Props {
   children: React.ReactNode
}

export function AuthLayout({ children }: Props) {
   const pathname = usePathname()

   const showHeader = useMemo(
      () => !WITHOUT_COMMON_HEADER.includes(pathname),
      [pathname],
   )

   return (
      <div>
         {showHeader && <Header title="TODO 타이틀 상수 이용" />}
         {children}
         {/* <BottomNavigation /> */}
      </div>
   )
}
