'use client'

import { Header } from '@shared/ui'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Badge } from '@gds/component'
import { pageWrapper } from './questionDetailInformation.css'

export function QuestionDetailInformation() {
   const params = useParams()
   return (
      <>
         <Header title={params.id} />
         <div className={pageWrapper}>
            <Badge size="small" variant="secondary">
               법원경비관리
            </Badge>
         </div>
      </>
   )
}
