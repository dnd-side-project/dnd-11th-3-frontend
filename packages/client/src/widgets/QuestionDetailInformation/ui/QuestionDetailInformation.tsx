'use client'

import { Header } from '@shared/ui'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { pageWrapper } from './questionDetailInformation.css'

export function QuestionDetailInformation() {
   const params = useParams()
   return (
      <>
         <Header title={params.id} />
         <div className={pageWrapper} />
      </>
   )
}
