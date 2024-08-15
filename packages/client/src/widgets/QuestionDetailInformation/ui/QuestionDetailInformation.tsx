'use client'

import { Header } from '@shared/ui'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Badge, Divider } from '@gds/component'
import { IconCredit } from '@gds/icon'
import { color } from '@gds/token'
import { ReactNode } from 'react'
import Image from 'next/image'
import { pageWrapper } from './questionDetailInformation.css'

export function QuestionDetailInformation() {
   const params = useParams()
   return (
      <>
         <Header title={params.id} />
         <div className={pageWrapper}>
            {/* <ProfileContents /> */}
            <Badge size="small" variant="secondary">
               0000
               <IconCredit color={color['secondary-main']} size={10} />
            </Badge>
            <ProfileContents title="닉네임" description="등록된 직무" />
         </div>
      </>
   )
}

function ProfileContents({
   title,
   description,
}: {
   title: ReactNode
   description: ReactNode
}) {
   return (
      <div style={{ width: '100%' }}>
         <Image src="" alt="profile" />
         <div>
            <h1>{title}</h1>
            <p>{description}</p>
         </div>
         <Divider variant="default" />
      </div>
   )
}
