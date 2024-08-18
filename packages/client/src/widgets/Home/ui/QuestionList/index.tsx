import React, { useState } from 'react'

import { useScrollHandler } from '@features/useScrollHandler'
import { Badge } from '@gds/component'
import { data } from 'src/clientPages/home/ui/ClientHomePage'
import Question from '@shared/ui/QuestionList/Question'
import * as styles from './index.css'

function QuestionList() {
   const [fixed, setFixed] = useState<boolean>(false)
   useScrollHandler(setFixed, 'nav-section')

   return (
      <div id="nav-section" className={styles.HomeWrapper}>
         <div
            className={`${styles.QuestionListsWrapper} ${fixed && styles.fixedNav}`}
         >
            <div className={styles.QuestionListHeaderWrapper}>
               <div className={styles.QuestionHeaderTitle}>
                  <span>질문 리스트</span>
               </div>
               <div className={styles.QuestionFilterBox}>
                  <Badge variant="primary" size="small">
                     더보기
                  </Badge>
               </div>
            </div>
         </div>
         <div className={styles.QuestionsWrapper}>
            {data.map((question) => {
               return <Question data={question} key={question.questionPostId} />
            })}
         </div>
      </div>
   )
}

export default QuestionList
