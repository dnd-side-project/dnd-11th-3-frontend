'use client'

import React from 'react'
import Question from '@shared/ui/QuestionList/Question'
import { QuestionDataType } from '@entities/@types/question'
import * as styles from '../index.css'

interface Prop {
   QuestionData: QuestionDataType[]
}

function AccountBookmarkClient({ QuestionData }: Prop) {
   return (
      <div className={styles.ListWrapper}>
         {QuestionData.map((question) => (
            <Question
               key={question.questionPostId}
               data={question}
               type="question"
            />
         ))}
      </div>
   )
}

export default AccountBookmarkClient
