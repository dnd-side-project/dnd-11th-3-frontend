'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { useScrollHandler } from '@features/useScrollHandler'
import Question from '@shared/ui/QuestionList/Question'
import { IconArrowRight, IconPlus } from '@gds/icon'
// import HomeRecommend from '@gds/component'
import { Badge, Button, Divider } from '@gds/component'

// import './slider.css'
import { PageURL } from '@shared/model'
import { useRouter } from 'next/navigation'
import { QuestionDataType } from '@entities/@types/question'
import { HomeHeader } from '@widgets/Home/ui/HomeHeader'
import * as styles from './style.css'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

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
   const settings = {
      className: 'center',
      infinite: true,
      slidesToShow: 1,
      swipeToSlide: true,
      nextArrow: (
         <div className={styles.ArrowBox}>
            <button aria-label="next" type="button" />
         </div>
      ),
   }
   const [jobCategory, setJobCategory] = useState({
      label: '전체',
      id: 'all',
   })
   const [fixed, setFixed] = useState<boolean>(false)
   useScrollHandler(setFixed, 'nav-section')
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
            {/* TODO: widgets 에 하나의 컴포넌트로 분리해주세요.  /src/widget/ui/home/QuestionList */}
            {/* <div id="nav-section" className={styles.HomeWrapper}>
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
                  {data.map((el) => {
                     return <Question data={el} />
                  })}
               </div>
            </div> */}
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
