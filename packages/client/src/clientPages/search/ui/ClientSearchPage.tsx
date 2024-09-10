'use client'

import { SearchHeader } from '@widgets/Search'
import {
   MultiSelect,
   SelectItemType,
} from 'src/design-system/component/MultiSelect'
import { IconFilter } from '@gds/icon'
import { useState } from 'react'
import { JOB_GROUPS } from '@shared/model/job'
import QuestionCard from '@shared/ui/QuestionList/Question'
import { MAX_SELECT_JOB_LENGTH } from '@shared/model'
import { useFetchQuestions } from 'src/clientPages/home/api/question'
import { useRouter } from 'next/navigation'
import { MainLoader } from '@shared/ui'
import * as styles from './style.css'

interface Prop {
   input: string
}

export function ClientSearchPage({ input }: Prop) {
   const [searchInput, setSearchInput] = useState<string>(decodeURI(input))
   const [selectedJobGroups, setSelectedJobGroups] = useState<SelectItemType[]>(
      [],
   )
   const router = useRouter()

   const handleSelect = (selectedItems: SelectItemType[]) => {
      if (selectedItems.length <= MAX_SELECT_JOB_LENGTH) {
         setSelectedJobGroups(selectedItems)
      }
   }

   const {
      data: searchQuestionsData,
      status: searchQuestionsDataStatus,
      isError: searchQuestionsDataIsError,
      error: searchQuestionsDataError,
   } = useFetchQuestions({
      condition: {
         keyword: decodeURI(input),
         jobGroups: selectedJobGroups.map((jobGroup) => jobGroup.label),
         isChosen: false,
      },
      pageable: {
         page: 0,
         size: 100,
      },
   })

   if (searchQuestionsDataIsError && searchQuestionsDataError) {
      router.push('/home')
      // TODO: toast로 수정 필요
      alert(searchQuestionsDataError.message || '서버 오류가 발생했습니다.')
   }

   return (
      <div className={styles.Container}>
         <SearchHeader input={searchInput} setSearchInput={setSearchInput} />
         <div className={styles.MulitSelectBox}>
            <MultiSelect
               variant="default"
               inputProps={{
                  icon: <IconFilter />,
               }}
               onSelect={handleSelect}
               selected={selectedJobGroups}
               placeholder={`직군 ${MAX_SELECT_JOB_LENGTH}개까지 선택 가능합니다.`}
               items={JOB_GROUPS.map((jobGroup) => ({
                  id: jobGroup,
                  label: jobGroup,
               }))}
            />
         </div>
         <div className={styles.SearchCountBox}>
            <span>검색결과 {searchQuestionsData?.content?.length}건</span>
         </div>
         <div className={styles.QuestionContainer}>
            {searchQuestionsData.content.map((question) => {
               return (
                  <QuestionCard data={question} key={question.questionPostId} />
               )
            })}
         </div>
      </div>
   )
}
