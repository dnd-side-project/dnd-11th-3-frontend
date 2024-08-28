'use client'

import React, { useState } from 'react'

import { IconPlus, IconSearch } from '@gds/icon'
import { Button, Divider, TextInput } from '@gds/component'
import { PageURL } from '@shared/model'
import { useRouter } from 'next/navigation'
import { HomeHeader } from '@widgets/Home/ui/HomeHeader'
import QuestionList from '@widgets/Home/ui/QuestionList'
import { Carousel } from '@widgets/Home/ui/Carousel'
import { SelectItemType } from 'src/design-system/component/MultiSelect'
import { MainLoader } from '@shared/ui'
import { QuestionPostSimpleResponse } from '@server-api/api'
import * as styles from './style.css'
import { useFetchQuestions } from '../api/question'
import { useRecommendList } from '../api/getRecommend'

export const data: QuestionPostSimpleResponse[] = [
   {
      questionPostId: 1,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: 2000,
      createdAt: '2024',
      isChosen: false,
      savedCount: 23,
      recommendCount: 2,
   },
   {
      questionPostId: 2,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: 2000,
      createdAt: '2024',
      isChosen: true,
      savedCount: 23,
      recommendCount: 2,
   },
   {
      questionPostId: 3,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: 2000,
      createdAt: '2024',
      isChosen: false,
      savedCount: 23,
      recommendCount: 2,
   },
   {
      questionPostId: 4,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: 2000,
      createdAt: '2024',
      isChosen: false,
      savedCount: 23,
      recommendCount: 2,
   },
   {
      questionPostId: 5,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: 2000,
      createdAt: '2024',
      isChosen: false,
      savedCount: 23,
      recommendCount: 2,
   },
   {
      questionPostId: 6,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: 2000,
      createdAt: '2024',
      isChosen: false,
      savedCount: 23,
      recommendCount: 2,
   },
]

export function ClientHomePage() {
   const router = useRouter()
   const [searchInput, setSearchInput] = useState<string | undefined>(undefined)
   const [selectedJobGroups, setSelectedJobGroups] = useState<SelectItemType[]>(
      [],
   )
   const [jobCategory, setJobCategory] = useState({
      label: '전체',
      id: 'all',
   })

   const { data: questions, status: questionListsStatus } = useFetchQuestions({
      condition: {
         jobGroups: selectedJobGroups.map((jobGroup) => jobGroup.label),
         isChosen: false,
      },
      pageable: {
         page: 0,
         size: 100,
      },
   })

   const { data: recommendQuestions, status: recommendStatus } =
      useRecommendList({
         pageable: {
            page: 0,
            size: 10,
         },
      })

   const handleOnChangeSearchInputInput = (
      event: React.ChangeEvent<HTMLInputElement>,
   ) => {
      setSearchInput(event.target.value)
   }

   const handleOnKeyDownEnter = (
      event: React.KeyboardEvent<HTMLInputElement>,
   ) => {
      if (event.key === 'Enter') {
         router.push(`/search/${searchInput}`)
      }
   }
   return (
      <>
         <MainLoader
            height={944}
            loading={
               recommendStatus === 'pending' ||
               questionListsStatus === 'pending'
            }
         />
         <div style={{ position: 'relative', height: '844px' }}>
            <div className={styles.absolutePos}>
               <div className={styles.HomeWrapper}>
                  <HomeHeader
                     selectedCategory={jobCategory}
                     onSelectCategory={setJobCategory}
                  />
                  <TextInput
                     value={searchInput}
                     onKeyDown={handleOnKeyDownEnter}
                     onChange={handleOnChangeSearchInputInput}
                     placeholder="검색어를 입력해주세요"
                     icon={<IconSearch size={25} />}
                  />
                  <div className={styles.RecommendWrapper}>
                     <div className={styles.RecommendHeaderBox}>
                        <div className={styles.RecommendTitle}>추천 질문</div>
                        <div className={styles.MoreBox}>
                           <Button size="small" variant="outlined">
                              더보기
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>

               <Carousel data={recommendQuestions} />
               <div className={styles.DividerWrapper}>
                  <Divider />
               </div>

               <QuestionList
                  data={questions ?? []}
                  selectedAdGroup={selectedJobGroups}
                  setSelectedJobGroups={setSelectedJobGroups}
               />
            </div>
            <div className={styles.floatingButton}>
               <Button
                  onClick={() => router.push(PageURL.QUESTION_CREATE)}
                  rounded
                  variant="filled"
                  size="medium"
                  leftIcon={<IconPlus />}
                  style={{ boxShadow: '0 2px  4px 0px rgba(0, 0, 0, 0.15)' }}
               >
                  작성하기
               </Button>
            </div>
         </div>
      </>
   )
}
