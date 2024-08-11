'use client'

import { COMMON_HEADER_META_DATA } from '@shared/model/navMetaData'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { Header } from './Header'

interface Props {
   children: React.ReactNode
}

export function AuthLayout({ children }: Props) {
   const pathname = usePathname()

   const headerTitle = useMemo(
      () =>
         COMMON_HEADER_META_DATA.find(({ url }) => pathname?.startsWith(url))
            ?.title || null,
      [pathname],
   )

   return (
      <div>
         {!!headerTitle && <Header title={headerTitle} />}
         {children}
         {/* <BottomNavigation /> */}
      </div>
   )
}
