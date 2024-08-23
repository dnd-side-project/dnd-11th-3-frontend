
import { Suspense } from 'react'
import { AuthLayout } from '../../src/apps/layout/ui'
import { MainLoader } from '@shared/ui'

interface Props {
   children: React.ReactNode
}

export default function Layout({ children }: Props) {
   return <AuthLayout>
      <Suspnse fallback={<MainLoader
      loading={true}
      height={844}
      />}>
      {children}</Suspnse></AuthLayout>
}
