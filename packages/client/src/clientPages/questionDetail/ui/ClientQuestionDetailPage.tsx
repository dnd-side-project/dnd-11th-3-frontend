'use client'

import {
   QuestionInformationContainer,
   AnswerContainer,
   QuestionInformationBottom,
} from '@widgets/QuestionDetail'
import { useFetchMemberInformation } from '@shared/api'
import { useParams } from 'next/navigation'
import { MainLoader } from '@shared/ui'
import { pageWrapper } from './style.css'
import {
   useFetchQuestionPost,
   usePostCancelQuestionMeta,
   usePostCreateQuestionMeta,
} from '../api/question'

export function ClientQuestionDetailPage() {
   const params = useParams()

   const { data: userData } = useFetchMemberInformation()
   const { data: questionData } = useFetchQuestionPost({
      questionPostId: Number(params.id),
   })
   const { mutate: createQuestionMeta } = usePostCreateQuestionMeta()
   const { mutate: cancelQuestionMeta } = usePostCancelQuestionMeta()
   console.log(userData)
   if (params.id === undefined) {
      // TODO
   }
   const loading = userData === undefined || questionData === undefined

   return (
      <>
         <MainLoader loading={loading} />
         <div className={pageWrapper}>
            <QuestionInformationContainer
               canUpdate={
                  userData?.memberId === questionData?.memberInfo?.memberId
               }
               questionData={questionData}
               bottomNode={
                  <QuestionInformationBottom
                     questionData={questionData}
                     onClick={(type) => {
                        createQuestionMeta({
                           questionPostId: Number(params.id),
                           type,
                        })
                     }}
                  />
               }
            />
            <AnswerContainer />
         </div>
      </>
   )
}
