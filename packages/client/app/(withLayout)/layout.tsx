import React from 'react'
import { AuthLayout } from '../../src/apps/layout'

interface Props {
   children: React.ReactNode
}

export default function Layout({ children }: Props) {
   return <AuthLayout>{children}</AuthLayout>
}
