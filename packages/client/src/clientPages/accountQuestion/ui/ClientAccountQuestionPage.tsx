'use client'

import React, { useState } from 'react'
import Tab from 'src/design-system/component/Tab'
import AnswerBox from 'src/design-system/component/Answer'
import Question from '@shared/ui/QuestionList/Question'
import {
   useGetPostsQuestions,
   useGetPostsQuestionsAnswers,
} from 'src/clientPages/accountQuestion/api/questionPosts'
import { useRouter } from 'next/navigation'
import * as styles from './index.css'

export function ClientAccountQuestion() {
   const [tabState, setTabState] = useState('write')

   const router = useRouter()

   const tabs = [
      { key: 'write', label: '작성한 질문' },
      { key: 'answer', label: '답변 단 질문' },
   ]

   const {
      data: postsQuestionsData,
      isError: postQuestionsDataIsError,
      error: postQuestionsDataError,
   } = useGetPostsQuestions({
      pageable: {
         page: 0,
         size: 10,
      },
   })

   const {
      data: postsQuestionsAnswerData,
      isError: postQuestionsAnswerDataIsError,
      error: postQuestionsAnswerDataError,
   } = useGetPostsQuestionsAnswers({
      pageable: {
         page: 0,
         size: 10,
      },
   })

   if (postQuestionsDataIsError) {
      router.push('/home')
      // TODO: toast로 수정 필요
      alert(postQuestionsDataError.message || '서버 오류가 발생했습니다.')
   } else if (postQuestionsAnswerDataIsError) {
      router.push('/home')
      // TODO: toast로 수정 필요
      alert(postQuestionsAnswerDataError.message || '서버 오류가 발생했습니다.')
   }

   return (
      <div className={styles.Wrapper}>
         <Tab tabState={tabState} setTabState={setTabState} tabs={tabs} />
         <div className={styles.ListWrapper}>
            {tabState === 'write'
               ? postsQuestionsData?.content?.map((question) => (
                    <Question key={question.questionPostId} data={question} />
                 ))
               : postsQuestionsAnswerData?.content?.map((question) => (
                    <React.Fragment key={question.questionPostId}>
                       <Question data={question} />
                       <AnswerBox
                          text={question.answerContent}
                          date={question.answerCreatedAt}
                       />
                    </React.Fragment>
                 ))}
         </div>
      </div>
   )
}
