'use client'

import {
   QuestionInformationContainer,
   AnswerContainer,
   QuestionInformationBottom,
   AnswerCard,
} from '@widgets/QuestionDetail'
import { useFetchMemberInformation } from '@shared/api'
import { useParams, useRouter } from 'next/navigation'
import { MainLoader } from '@shared/ui'
import { pageWrapper } from './style.css'
import {
   useFetchQuestionPost,
   usePostCancelQuestionMeta,
   usePostCreateQuestionMeta,
} from '../api/question'
import { useFetchAnswers, usePostAnswer } from '../api/answer'

export function ClientQuestionDetailPage() {
   const params = useParams()
   const router = useRouter()

   const { data: userData } = useFetchMemberInformation()
   const { data: questionData } = useFetchQuestionPost({
      questionPostId: Number(params.id),
   })
   const { mutate: createQuestionMeta } = usePostCreateQuestionMeta()
   const { mutate: cancelQuestionMeta } = usePostCancelQuestionMeta()
   const { mutate: createAnswer } = usePostAnswer()
   const { data: answersData, refetch } = useFetchAnswers({
      questionPostId: Number(params.id),
   })
   const loading = userData === undefined || questionData === undefined // TODO: fix loading

   if (params.id === undefined) {
      router.push('/home')
   }

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
            <AnswerContainer
               isWriter={
                  userData?.memberId === questionData?.memberInfo?.memberId
               }
               onClick={(answer) => {
                  createAnswer(
                     {
                        questionPostId: Number(params.id),
                        registerAnswerRequest: { content: answer },
                     },
                     {
                        onSuccess: () => {
                           refetch()
                        },
                     },
                  )
               }}
               bottomNode={answersData?.content?.map((data) => (
                  <AnswerCard
                     answerData={data}
                     key={data.answerId}
                     userId={userData?.memberId}
                  />
               ))}
            />
         </div>
      </>
   )
}
