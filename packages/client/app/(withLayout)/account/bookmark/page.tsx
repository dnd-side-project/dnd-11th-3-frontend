import React from 'react'
import Question from '@shared/ui/QuestionList/Question'
import { QuestionData } from 'app/(withLayout)/home/page'
import * as styles from '../index.css'

function AccountBookmark() {
   return (
      <div className={styles.Wrapper}>
         <div className={styles.ListWrapper}>
            {QuestionData.map((question) => {
               return (
                  <Question
                     key={question.questionPostId}
                     data={question}
                     type="question"
                  />
               )
            })}
         </div>
      </div>
   )
}

export default AccountBookmark
