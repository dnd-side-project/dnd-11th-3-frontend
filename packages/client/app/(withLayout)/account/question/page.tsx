'use client'

import React, { useState } from 'react'
import Tab from 'src/design-system/component/Tab'
import AnswerBox from 'src/design-system/component/Answer'
import Question from '@shared/ui/QuestionList/Question'
import { useGetPostsQuestions } from 'src/clientPages/accountQuestion/api/questionPosts'
import * as styles from '../index.css'

function AccountQuestion() {
   const [tabState, setTabState] = useState('write')

   const tabs = [
      { key: 'write', label: '작성한 질문' },
      { key: 'answer', label: '답변 단 질문' },
   ]

   const { data: postsQuestionsData } = useGetPostsQuestions({
      pageable: {
         page: 0,
         size: 10,
      },
   })

   return (
      <div className={styles.Wrapper}>
         <Tab tabState={tabState} setTabState={setTabState} tabs={tabs} />
         <div className={styles.ListWrapper}>
            {tabState === 'write'
               ? postsQuestionsData?.content?.map((question) => (
                    <Question key={question.questionPostId} data={question} />
                 ))
               : postsQuestionsData?.content?.map((question) => (
                    <React.Fragment key={question.questionPostId}>
                       <Question data={question} />
                       <AnswerBox
                          text="내 생일 파티에 너만 못 온 그날 혜진이가 엄청 혼났던 그날 지원이가 여친이랑 헤어진 그날"
                          date="2024.07.19"
                       />
                    </React.Fragment>
                 ))}
         </div>
      </div>
   )
}

export default AccountQuestion
