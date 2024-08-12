'use client'

import { COMMON_HEADER_META_DATA } from '@shared/model'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'
import { Header, NavBar } from '@shared/ui/index'
import { Button } from '@gds/component'

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
         <Button variant="filled" size="medium">
            Button
         </Button>
         <NavBar />
         {/* TODO: fix NavBar to hide in some pages(기획 물어보기!!!) */}
      </div>
   )
}
