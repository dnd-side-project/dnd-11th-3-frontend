'use client'

import { Badge } from '@gds/component'
import { IconCredit } from '@gds/icon'
import { color, Typo } from '@gds/token'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { QuestionPostDetailResponse } from '@server-api/api'
import { ProfileContents } from './ProfileContents'

import { QuestionInformationBottom } from './QuestionInformationBottom'
import { QuestionDetailHeader } from './QuestionDetailHeader'

interface Props {
   questionData: QuestionPostDetailResponse | undefined
   canUpdate: boolean
   bottomNode: React.ReactNode
}

export function QuestionInformationContainer({
   questionData,
   canUpdate,
   bottomNode,
}: Props) {
   const params = useParams()
   return (
      <>
         <QuestionDetailHeader
            canUpdate={canUpdate}
            title={`${questionData?.memberInfo?.memberJobGroup} 질문`}
            id={String(params.id)}
         />
         <ProfileContents
            title={questionData?.memberInfo?.nickname}
            description={questionData?.memberInfo?.memberJobGroup}
         />
         <Badge size="small" variant="secondary">
            {questionData?.reward}
            <IconCredit color={color['secondary-main']} size={11} />
         </Badge>
         <div style={{ minHeight: 200 }}>
            <div className={Typo.h1.lg}>{questionData?.title}</div>
            <div className={Typo.body1.md}>{questionData?.content}</div>
         </div>
         {!!questionData?.imageUrls?.length &&
            questionData?.imageUrls.map((url) => (
               <Image
                  key={url}
                  style={{
                     borderRadius: 4,
                     border: `1px solid ${color['gray-800']}`,
                  }}
                  src={url}
                  alt="QuestionDetailInformation"
                  width={358}
                  height={230}
               />
            ))}
         {bottomNode}
      </>
   )
}
