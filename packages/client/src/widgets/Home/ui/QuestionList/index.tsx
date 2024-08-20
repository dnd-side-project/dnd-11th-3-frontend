import React, { useState } from 'react'

import { useScrollHandler } from '@features/useScrollHandler'
import { data } from 'src/clientPages/home/ui/ClientHomePage'
import Question from '@shared/ui/QuestionList/Question'
import { IconFilter } from '@gds/icon'
import { SelectItemType } from 'src/design-system/component/Select/Select'
import { MultiSelect } from 'src/design-system/component/MultiSelect'
import * as styles from './index.css'

function QuestionList() {
   const [fixed, setFixed] = useState<boolean>(false)
   const [selectedWithIcon, setSelectedWithIcon] = useState<SelectItemType[]>(
      [],
   )

   useScrollHandler(setFixed, 'nav-section')

   const handleSelect = (selectedItems: SelectItemType[]) => {
      setSelectedWithIcon(selectedItems)
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
                     selected={selectedWithIcon}
                     placeholder="직군 3개까지 선택 가능합니다."
                     items={[
                        // TODO: 직군 데이터로 변경 필요
                        { label: 'Option 1', id: '1' },
                        { label: 'Option 2', id: '2' },
                        { label: 'Option 3', id: '3' },
                        { label: 'Option 4', id: '4' },
                        { label: 'Option 56', id: '5' },
                     ]}
                  />
               </div>
            </div>
         </div>
         <div className={styles.QuestionsWrapper}>
            {data.map((question) => (
               <Question data={question} key={question.questionPostId} />
            ))}
         </div>
      </div>
   )
}

export default QuestionList
