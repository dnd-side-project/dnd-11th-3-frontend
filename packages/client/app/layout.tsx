import React from 'react'
import type { Metadata, Viewport } from 'next'

import './globals.css'
import '@gmi-design-system/global.css'
import localFont from 'next/font/local'
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

const pretendard = localFont({
   src: './PretendardVariable.woff2',
   display: 'swap',
   weight: '45 920',
   variable: '--font-pretendard',
})

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className={pretendard.className}>
         <head>
            <link
               rel="stylesheet"
               type="text/css"
               href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
               rel="stylesheet"
               type="text/css"
               href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
         </head>
         <body>
            <div className="mobile-layout">
               <ReactQueryClientProviders>{children}</ReactQueryClientProviders>
            </div>
         </body>
      </html>
   )
}
