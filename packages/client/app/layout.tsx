import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ReactQueryClientProviders from '../src/utils/common/reactQueryProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'temp app client',
   description: 'this service is for korea public officials',
   appleWebApp: {
      title: 'temp app client',
      statusBarStyle: 'default',
   },
}
export const viewport: Viewport = {
   width: 'device-width',
   height: 'device-height',
   initialScale: 1,
   minimumScale: 1,
   maximumScale: 1,
   interactiveWidget: 'resizes-content',
   viewportFit: 'contain',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <head />
         <body className={inter.className}>
            <ReactQueryClientProviders>{children}</ReactQueryClientProviders>
         </body>
      </html>
   )
}
