// import { Suspense } from 'react'
// import { MainLoader } from '@shared/ui'
import { AuthLayout } from '../../src/apps/layout/ui'

interface Props {
   children: React.ReactNode
}

export default function Layout({ children }: Props) {
   return (
      <AuthLayout>
         {/* <Suspense fallback={<MainLoader loading height={944} />}> */}
         {children}
         {/* </Suspense> */}
      </AuthLayout>
   )
}
