'use client'

import { Badge, Button } from '@gds/component'
import {
   IconBookmark,
   IconBookmarkFilled,
   IconCredit,
   IconThumbUpFilled,
} from '@gds/icon'
import { color, Typo } from '@gds/token'
import { Header } from '@shared/ui'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ProfileContents } from './ProfileContents'
import { pageWrapper } from './questionDetail.css'
import { QuestionDetailInformationBottom } from './QuestionDetailInformationBottom'

export function QuestionDetailInformation() {
   const params = useParams()
   return (
      <>
         <Header title={String(params.id)} />
         {/* TODO: fix title */}
         <div className={pageWrapper}>
            <ProfileContents title="닉네임" description="등록된 직무" />
            <Badge size="small" variant="secondary">
               0000
               <IconCredit color={color['secondary-main']} size={11} />
            </Badge>
            <div className={Typo.h1.lg}>질문 제목</div>
            <div className={Typo.body1.md}>질문 내용들</div>
            <Image
               style={{
                  borderRadius: 4,
                  border: `1px solid ${color['gray-800']}`,
               }}
               src="https://fakeimg.pl/600x400"
               alt="QuestionDetailInformation"
               width={358}
               height={230}
            />
            <QuestionDetailInformationBottom />
         </div>
      </>
   )
}
