import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppRouterCacheProvider from '../utils/common/emotionAppRouter'
import ReactQueryClientProviders from '../utils/common/reactQueryProviders'

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
         <body className={inter.className}>
            <ReactQueryClientProviders>
               <AppRouterCacheProvider
                  options={{ key: 'design-system', enableCssLayer: true }}
               >
                  {children}
               </AppRouterCacheProvider>
            </ReactQueryClientProviders>
         </body>
      </html>
   )
}
