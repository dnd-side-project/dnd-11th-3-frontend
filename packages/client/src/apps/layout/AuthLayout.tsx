'use client'

import React from 'react'
import { Header } from './Header'

interface Props {
   children: React.ReactNode
   showHeader?: boolean
   pageTitle?: string
}

export function AuthLayout({ children, showHeader = true, pageTitle }: Props) {
   return (
      <div>
         {showHeader && <Header title={pageTitle} />}
         {children}
         {/* <BottomNavigation /> */}
      </div>
   )
}
