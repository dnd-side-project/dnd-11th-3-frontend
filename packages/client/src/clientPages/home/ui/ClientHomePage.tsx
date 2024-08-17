'use client'

import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { useScrollHandler } from '@features/useScrollHandler'
import Question from '@shared/ui/QuestionList/Question'
import { IconArrowRight } from '@gds/icon'
// import HomeRecommend from '@gds/component'
import { FloatButton, Badge, Button } from '@gds/component'

// import './slider.css'
import * as styles from './style.css'

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

   const [fixed, setFixed] = useState<boolean>(false)
   useScrollHandler(setFixed, 'nav-section')

   return (
      <div style={{ position: 'fixed', height: '844px' }}>
         <div
            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               overflowY: 'scroll',
            }}
         >
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
               <div className="slider-container">
                  <Slider
                     className={settings.className}
                     infinite={settings.infinite}
                     slidesToShow={settings.slidesToShow}
                     swipeToSlide={settings.swipeToSlide}
                     nextArrow={settings.nextArrow}
                  >
                     슬라이더
                     {/** TODO: 데이터 형식으로 변경하기 */}
                     {/* <HomeRecommend
                        src={Blue}
                        coin="2000"
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                     <HomeRecommend
                        src={Green}
                        coin="2000"
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     />
                     <HomeRecommend
                        src={Orange}
                        coin="2000"
                        title="ddd"
                        bookmark={20}
                        likes={4}
                     /> */}
                  </Slider>
               </div>
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
            </div>
         </div>
         <FloatButton />
      </div>
   )
}
