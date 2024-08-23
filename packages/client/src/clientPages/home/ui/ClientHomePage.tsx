'use client'

import React, { useState } from 'react'

import { IconPlus, IconSearch } from '@gds/icon'
import { Button, Divider, TextInput } from '@gds/component'
import { PageURL } from '@shared/model'
import { useRouter } from 'next/navigation'
import { QuestionDataType } from '@entities/@types/question'
import { HomeHeader } from '@widgets/Home/ui/HomeHeader'
import QuestionList from '@widgets/Home/ui/QuestionList'
import { Carousel } from '@widgets/Home/ui/Carousel'
import { pages } from 'next/dist/build/templates/app-page'
import { SelectItemType } from 'src/design-system/component/MultiSelect'
import * as styles from './style.css'
import { useFetchQuestions } from '../api/question'

export const data: QuestionDataType[] = [
   {
      questionPostId: 1,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: '2000',
      createdAt: '2024',
      isChosen: false,
      bookmark: 23,
      likes: 2,
      tag: '법원경비관리',
      date: '2024',
   },
   {
      questionPostId: 2,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: '2000',
      createdAt: '2024',
      isChosen: true,
      bookmark: 23,
      likes: 2,
      tag: '법원경비관리',
      date: '2024',
   },
   {
      questionPostId: 3,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: '2000',
      createdAt: '2024',
      isChosen: false,
      bookmark: 23,
      likes: 2,
      tag: '법원경비관리',
      date: '2024',
   },
   {
      questionPostId: 4,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: '2000',
      createdAt: '2024',
      isChosen: false,
      bookmark: 23,
      likes: 2,
      tag: '법원경비관리',
      date: '2024',
   },
   {
      questionPostId: 5,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: '2000',
      createdAt: '2024',
      isChosen: false,
      bookmark: 23,
      likes: 2,
      tag: '법원경비관리',
      date: '2024',
   },
   {
      questionPostId: 6,
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      jobGroup: '법원경비관리',
      reward: '2000',
      createdAt: '2024',
      isChosen: false,
      bookmark: 23,
      likes: 2,
      tag: '법원경비관리',
      date: '2024',
   },
]

export function ClientHomePage() {
   const router = useRouter()
   const [search, setSearch] = useState<string | undefined>(undefined)
   const [selectedJobGroups, setSelectedJobGroups] = useState<SelectItemType[]>(
      [],
   )
   const { data: questions } = useFetchQuestions({
      condition: {
         keyword: search,
         jobGroups: selectedJobGroups.map((jobGroup) => jobGroup.key),
         isChosen: false,
      },
      pageable: {
         page: 1,
         size: 10,
      },
   })

   const [jobCategory, setJobCategory] = useState({
      label: '전체',
      id: 'all',
   })

   return (
      <div style={{ position: 'relative', height: '844px' }}>
         <div className={styles.absolutePos}>
            <div className={styles.HomeWrapper}>
               <HomeHeader
                  selectedCategory={jobCategory}
                  onSelectCategory={setJobCategory}
               />
               <TextInput
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
            <Carousel />
            <div className={styles.DividerWrapper}>
               <Divider />
            </div>
            <QuestionList
               data={questions}
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
   )
}
