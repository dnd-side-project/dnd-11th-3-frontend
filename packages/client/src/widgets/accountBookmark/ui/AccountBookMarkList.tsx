'use client'

import React from 'react'
import Question from '@shared/ui/QuestionList/Question'
import { QuestionDataType } from '@entities/@types/question'
import { ListWrapper } from './index.css'

interface Prop {
   QuestionData: QuestionDataType[]
}

function AccountBookmarkClient({ QuestionData }: Prop) {
   return (
      <div className={ListWrapper}>
         {QuestionData.map((question) => (
            <Question key={question.questionPostId} data={question} />
         ))}
      </div>
   )
}

export default AccountBookmarkClient
