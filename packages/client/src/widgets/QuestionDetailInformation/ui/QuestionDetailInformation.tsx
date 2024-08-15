'use client'

import { Badge, Divider } from '@gds/component'
import { IconCredit, IconCharacter } from '@gds/icon'
import { color, Typo } from '@gds/token'
import { Header } from '@shared/ui'

import { useParams } from 'next/navigation'
import { ReactNode } from 'react'
import Image from 'next/image'
import {
   pageWrapper,
   profileImageWrapper,
   profileWrapper,
   typoWrapper,
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
            <div className={Typo.h1.lg}>질문 제목</div>
            <div className={Typo.body1.md}>질문 내용들</div>
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
            <div className={typoWrapper}>
               <strong className={Typo.body1.sb}>{title}</strong>
               <strong className={Typo.body2.md}>{description}</strong>
               {/* TODO: fix description font style */}
            </div>
         </div>
         <Divider variant="default" />
      </>
   )
}
