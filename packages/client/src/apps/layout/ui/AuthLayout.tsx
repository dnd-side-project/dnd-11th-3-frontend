'use client'

import { COMMON_HEADER_META_DATA, PageURL } from '@shared/model'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { Header, NavBar } from '@shared/ui/index'

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

   const showBottomNavBar = useMemo(() => {
      const PAGES: string[] = [PageURL.ACCOUNT, PageURL.HOME]
      return PAGES.includes(pathname)
   }, [pathname])

   return (
      <div>
         {!!headerTitle && <Header title={headerTitle} />}
         {children}
         {showBottomNavBar && <NavBar />}
      </div>
   )
}
