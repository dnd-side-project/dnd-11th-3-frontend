'use client'

import {
   QuestionInformationContainer,
   AnswerContainer,
   QuestionInformationBottom,
} from '@widgets/QuestionDetail'
import { useFetchMemberInformation } from '@shared/api'
import { useParams } from 'next/navigation'
import { pageWrapper } from './style.css'
import { useFetchQuestionPost } from '../api/question'

export function ClientQuestionDetailPage() {
   const params = useParams()

   const { data: userData } = useFetchMemberInformation()
   const { data: questionData } = useFetchQuestionPost({
      questionPostId: Number(params.id),
   })
   console.log(userData)
   if (params.id === undefined) {
      // TODO
   }

   return (
      <div className={pageWrapper}>
         <QuestionInformationContainer
            canUpdate={
               userData?.memberId === questionData?.memberInfo?.memberId
            }
            questionData={questionData}
            bottomNode={<QuestionInformationBottom />}
         />
         <AnswerContainer />
      </div>
   )
}
