'use client'

import {
   BlueIcon,
   Button,
   GreenIcon,
   HomeRecommend,
   IconArrowRight,
   OrangeIcon,
} from 'gmi-design-system'

import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useScrollHandler } from '@features/useScrollHandler'
import Question from '@shared/ui/QuestionList/Question'
import { useClientSideRender } from './useClientSideRender'
import './slider.css'
import * as styles from './index.css'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

const data = [
   {
      tag: '법원경비관리',
      reward: '2000',
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      date: '2024',
      bookmark: 23,
      likes: 2,
   },
   {
      tag: '법원경비관리',
      reward: '2000',
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      date: '2024',
      bookmark: 23,
      likes: 2,
   },
   {
      tag: '법원경비관리',
      reward: '2000',
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      date: '2024',
      bookmark: 23,
      likes: 2,
   },
   {
      tag: '법원경비관리',
      reward: '2000',
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      date: '2024',
      bookmark: 23,
      likes: 2,
   },
   {
      tag: '법원경비관리',
      reward: '2000',
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      date: '2024',
      bookmark: 23,
      likes: 2,
   },
   {
      tag: '법원경비관리',
      reward: '2000',
      title: '서류 처리 관련 질문',
      content: '안녕ㅎ아세요',
      date: '2024',
      bookmark: 23,
      likes: 2,
   },
]

export default function Home() {
   const isClient = useClientSideRender()

   const settings = {
      className: 'center',
      infinite: true,
      slidesToShow: 1,
      swipeToSlide: true,
      nextArrow: (
         <div className={styles.ArrowBox}>
            <IconArrowRight />
         </div>
      ),
   }

   const [fixed, setFixed] = useState<boolean>(false)
   useScrollHandler(setFixed, 'nav-section')

   return (
      <>
         <div className={styles.HomeWrapper}>
            <HomeHeader />
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
         <div className={styles.RecommendContentBox}>
            {isClient && (
               <div className="slider-container">
                  <Slider
                     className={settings.className}
                     infinite={settings.infinite}
                     slidesToShow={settings.slidesToShow}
                     swipeToSlide={settings.swipeToSlide}
                     nextArrow={settings.nextArrow}
                  >
                     {/** TODO: 데이터 형식으로 변경하기 */}
                     <HomeRecommend
                        src={BlueIcon}
                        coin="2000"
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                     <HomeRecommend
                        src={GreenIcon}
                        coin="2000"
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                     <HomeRecommend
                        src={OrangeIcon}
                        coin="2000"
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                  </Slider>
               </div>
            )}
         </div>
         <hr className={styles.Line} />
         <div id="nav-section" className={styles.HomeWrapper}>
            <div
               className={`${styles.QuestionListsWrapper} ${fixed && styles.fixedNav}`}
            >
               <div className={styles.QuestionListHeaderWrapper}>
                  <div className={styles.QuestionHeaderTitle}>
                     <span>질문 리스트</span>
                  </div>
                  <div className={styles.QuestionFilterBox}>
                     {/** TODO: 디자인시스템 작성필요 */}
                     <Button size="small" variant="outlined">
                        더보기
                     </Button>
                     <Button size="small" variant="outlined">
                        더보기
                     </Button>
                     <Button size="small" variant="outlined">
                        더보기
                     </Button>
                  </div>
               </div>
            </div>
            <div className={styles.QuestionsWrapper}>
               {data.map((el) => {
                  return <Question data={el} />
               })}
            </div>
         </div>
      </>
   )
}
