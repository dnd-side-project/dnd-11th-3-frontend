import React from 'react'
import type { Metadata, Viewport } from 'next'

import './globals.css'

import ReactQueryClientProviders from '../src/apps/provider/reactQueryProviders'

export const metadata: Metadata = {
   title: 'GongMuIn',
   description: 'The Platform is for Korea public officials',
   appleWebApp: {
      title: 'GongMuIn app client',
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
         <body>
            <div className="mobile-layout">
               <ReactQueryClientProviders>{children}</ReactQueryClientProviders>
            </div>
         </body>
      </html>
   )
}
