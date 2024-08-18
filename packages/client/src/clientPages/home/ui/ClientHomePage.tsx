'use client'

import React, { useState } from 'react'

import { useScrollHandler } from '@features/useScrollHandler'
import { IconArrowRight, IconPlus } from '@gds/icon'
import { Badge, Button, Divider } from '@gds/component'

// import './slider.css'
import { PageURL } from '@shared/model'
import { useRouter } from 'next/navigation'
import { QuestionDataType } from '@entities/@types/question'
import { HomeHeader } from '@widgets/Home/ui/HomeHeader'
import QuestionList from '@widgets/Home/ui/QuestionList'
import * as styles from './style.css'

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
      isChosen: false,
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
   const [jobCategory, setJobCategory] = useState({
      label: '전체',
      id: 'all',
   })
   const router = useRouter()

   return (
      <div style={{ position: 'relative', height: '844px' }}>
         <div
            style={{
               // TODO: 분리해주세요.
               position: 'absolute',
               top: 0,
               left: 0,
               overflowY: 'scroll',
            }}
         >
            <div className={styles.HomeWrapper}>
               <HomeHeader
                  selectedCategory={jobCategory}
                  onSelectCategory={setJobCategory}
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
            {/* TODO: widgets 에 하나의 컴포넌트로 분리해주세요. /src/widget/ui/home/Carousel */}
            {/* <div className={styles.RecommendContentBox}>
               <div className="slider-container">
                  <Slider
                     className={settings.className}
                     infinite={settings.infinite}
                     slidesToShow={settings.slidesToShow}
                     swipeToSlide={settings.swipeToSlide}
                     nextArrow={settings.nextArrow}
                  >
                     슬라이더
                     
                     <HomeRecommend
                        src={Blue}
                        coin="""2000"""
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                     <HomeRecommend
                        src={Green}
                        coin="""2000"""
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                     <HomeRecommend
                        src={Orange}
                        coin="""2000"""
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                  </Slider>
               </div>
            </div> */}
            <Divider />
            <QuestionList />
         </div>
         <div className={styles.floatingButton}>
            <Button
               onClick={() => router.push(PageURL.QUESTION_CREATE)}
               rounded
               variant="filled"
               size="medium"
               leftIcon={<IconPlus />}
            >
               작성하기
            </Button>
         </div>
      </div>
   )
}
