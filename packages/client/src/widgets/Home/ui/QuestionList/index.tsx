'use client'

import { useState } from 'react'

import { useScrollHandler } from '@features/useScrollHandler'

import Question from '@shared/ui/QuestionList/Question'
import { IconFilter } from '@gds/icon'
import { SelectItemType } from 'src/design-system/component/Select/Select'
import { MultiSelect } from 'src/design-system/component/MultiSelect'
import { JOB_GROUPS } from '@shared/model/job'
import { PageResponseQuestionPostSimpleResponse } from '@server-api/api'
import * as styles from './index.css'

interface Props {
   data: PageResponseQuestionPostSimpleResponse
   onSelectAdGroup: (selectedItems: SelectItemType[]) => void
   selectedAdGroup: SelectItemType[]
}

function QuestionList({ data, onSelectAdGroup, selectedAdGroup }: Props) {
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
                  <MultiSelect
                     variant="default"
                     inputProps={{
                        icon: <IconFilter />,
                     }}
                     onSelect={onSelectAdGroup}
                     selected={selectedAdGroup}
                     placeholder="직군 3개까지 선택 가능합니다."
                     items={JOB_GROUPS.map((jobGroup) => ({
                        id: jobGroup,
                        label: jobGroup,
                     }))}
                  />
               </div>
            </div>
         </div>
         <div className={styles.QuestionsWrapper}>
            {data?.content?.map((question) => (
               <Question data={question} key={question.questionPostId} />
            ))}
         </div>
      </div>
   )
}

export default QuestionList
