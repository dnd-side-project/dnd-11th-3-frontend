'use client'

import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'
import { Button } from '@gmi-design-system/component/Button/Button'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Green from '@gmi-design-system/component/Recommend/home/Green.svg'
import Blue from '@gmi-design-system/component/Recommend/home/Blue.svg'
import Orange from '@gmi-design-system/component/Recommend/home/Orange.svg'
import Image from 'next/image'
import { useScrollHandler } from '@features/useScrollHandler'
import Question from '@shared/ui/QuestionList/Question'
import * as styles from './index.css'
import { useClientSideRender } from './useClientSideRender'

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
      centerPadding: '60px',
      slidesToShow: 2,
      swipeToSlide: true,
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
               <>
                  <link
                     rel="stylesheet"
                     type="text/css"
                     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                  />
                  <link
                     rel="stylesheet"
                     type="text/css"
                     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                  />
                  <div className="slider-container">
                     <Slider
                        className={settings.className}
                        infinite={settings.infinite}
                        centerPadding={settings.centerPadding}
                        slidesToShow={settings.slidesToShow}
                        swipeToSlide={settings.swipeToSlide}
                     >
                        {/** TODO: 데이터 형식으로 변경하기 */}
                        <div className={styles.RecommendItem}>
                           <Image src={Orange} alt="orange title" />
                        </div>
                        <div className={styles.RecommendItem}>
                           <Image src={Blue} alt="orange title" />
                        </div>
                        <div className={styles.RecommendItem}>
                           <Image src={Green} alt="orange title" />
                        </div>
                        <div className={styles.RecommendItem}>
                           <Image src={Orange} alt="orange title" />
                        </div>
                        <div className={styles.RecommendItem}>
                           <Image src={Green} alt="orange title" />
                        </div>
                     </Slider>
                  </div>
               </>
            )}
         </div>
         <hr className={styles.Line} />
         <div className={styles.HomeWrapper}>
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
            <div id="nav-section" className={styles.QuestionsWrapper}>
               {data.map((el) => {
                  return <Question data={el} />
               })}
            </div>
         </div>
      </>
   )
}
