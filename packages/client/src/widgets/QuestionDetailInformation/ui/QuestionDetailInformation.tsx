'use client'

import { Badge, Divider } from '@gds/component'
import { IconCredit, IconCharacter } from '@gds/icon'
import { color } from '@gds/token'
import { Header } from '@shared/ui'

import { useParams } from 'next/navigation'
import { ReactNode } from 'react'
import Image from 'next/image'
import {
   pageWrapper,
   profileImageWrapper,
   profileWrapper,
} from './questionDetailInformation.css'

export function QuestionDetailInformation() {
   const params = useParams()
   return (
      <>
         <Header title={params.id} />
         <div className={pageWrapper}>
            <ProfileContents title="닉네임" description="등록된 직무" />
            <Badge size="small" variant="secondary">
               0000
               <IconCredit color={color['secondary-main']} size={10} />
            </Badge>
            <Image
               src="https://fakeimg.pl/600x400"
               alt="QuestionDetailInformation"
               width={358}
               height={230}
            />
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
      <>
         <div className={profileWrapper}>
            <div className={profileImageWrapper}>
               <IconCharacter color={color['secondary-main']} size={48} />
            </div>
            <div>
               {title}
               <p>{description}</p>
               {/* TODO: fix description font style */}
            </div>
         </div>
         <Divider variant="default" />
      </>
   )
}
