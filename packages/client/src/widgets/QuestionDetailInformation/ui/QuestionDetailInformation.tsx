'use client'

import { Header } from '@shared/ui'
import { useParams, usePathname, useRouter } from 'next/navigation'

export function QuestionDetailInformation() {
   const params = useParams()
   return <Header title={params.id} />
}
