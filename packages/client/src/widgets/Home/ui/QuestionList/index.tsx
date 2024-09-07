'use client'

import { useState } from 'react'

import { useScrollHandler } from '@features/useScrollHandler'

import { IconFilter } from '@gds/icon'
import { SelectItemType } from 'src/design-system/component/Select/Select'
import { MultiSelect } from 'src/design-system/component/MultiSelect'
import { JOB_GROUPS } from '@shared/model/job'
import { PageResponseQuestionPostSimpleResponse } from '@server-api/api'
import QuestionCard from '@shared/ui/QuestionList/Question'
import { MAX_SELECT_JOB_LENGTH } from '@shared/model'
import * as styles from './index.css'

interface Props {
   data?: PageResponseQuestionPostSimpleResponse
   selectedAdGroup: SelectItemType[]
   setSelectedJobGroups: (selectedItems: SelectItemType[]) => void
}

function QuestionList({ data, selectedAdGroup, setSelectedJobGroups }: Props) {
   const [fixed, setFixed] = useState<boolean>(false)

   useScrollHandler(setFixed, 'nav-section')

   const handleSelect = (selectedItems: SelectItemType[]) => {
      if (selectedItems.length <= MAX_SELECT_JOB_LENGTH) {
         setSelectedJobGroups(selectedItems)
      }
   }

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
                     onSelect={handleSelect}
                     selected={selectedAdGroup}
                     placeholder={`직군 ${MAX_SELECT_JOB_LENGTH}개까지 선택 가능합니다.`}
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
               <QuestionCard data={question} key={question.questionPostId} />
            ))}
         </div>
      </div>
   )
}

export default QuestionList
