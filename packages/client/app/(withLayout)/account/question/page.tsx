'use client'

import React, { useState } from 'react'
import Tab from 'src/design-system/component/Tab'
import AnswerBox from 'src/design-system/component/Answer'
import Question from '@shared/ui/QuestionList/Question'
import { QuestionData } from 'app/(withLayout)/home/page'
import * as styles from '../index.css'

function AccountQuestion() {
   const [tabState, setTabState] = useState('write')

   const tabs = [
      { key: 'write', label: '작성한 질문' },
      { key: 'answer', label: '답변 단 질문' },
   ]

   return (
      <div className={styles.Wrapper}>
         <Tab tabState={tabState} setTabState={setTabState} tabs={tabs} />
         <div className={styles.ListWrapper}>
            {tabState === 'write'
               ? QuestionData.map((el) => (
                    <Question key={el.id} data={el} type="question" />
                 ))
               : QuestionData.map((el) => (
                    <React.Fragment key={el.id}>
                       <Question data={el} type="answer" />
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
