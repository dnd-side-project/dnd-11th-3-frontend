'use client'

import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'
import { Button } from '@gmi-design-system/component/Button/Button'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Green from '@gmi-design-system/component/Recommend/home/Green.svg'
import Blue from '@gmi-design-system/component/Recommend/home/Blue.svg'
import Orange from '@gmi-design-system/component/Recommend/home/Orange.svg'
import Image from 'next/image'
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

   useEffect(() => {
      const navbar = document.getElementById('nav-section')
      const navOffset = navbar?.offsetTop || 0

      const handleScroll = () => {
         setFixed(window.scrollY >= navOffset)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

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
               id="nav-section"
               className={`${styles.QuestionListsWrapper} ${fixed ? styles.fixedNav : ''}`}
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
            {data.map((el) => {
               return (
                  <div className={styles.QuestionWrapper}>
                     <div className={styles.QuestionTagWrapper}>
                        {/** TODO: 디자인시스템 작성 필요 */}
                        {el.tag} {el.reward}
                     </div>
                     <div className={styles.QuestionTitleBox}>
                        <span>{el.title}</span>
                     </div>
                     <div className={styles.QuestionContentBox}>
                        {el.content}
                     </div>
                     <div className={styles.QuestionBottomWrapper}>
                        <div className={styles.QuestionDateBox}>
                           <span>{el.date}</span>
                        </div>
                        <div className={styles.QuestionDetailBox}>
                           <div className={styles.QuestionIconBox} />
                           <div className={styles.QuestionIconTxtBox}>
                              {el.bookmark}
                           </div>
                           <div className={styles.QuestionIconBox} />
                           <div className={styles.QuestionIconTxtBox}>
                              {el.likes}
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </>
   )
}
