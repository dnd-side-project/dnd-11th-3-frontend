'use client'

import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'
import { Button } from '@gmi-design-system/component/Button/Button'
import React from 'react'
import dynamic from 'next/dynamic'
import Green from '@gmi-design-system/component/Recommend/home/Green.svg'
import Blue from '@gmi-design-system/component/Recommend/home/Blue.svg'
import Orange from '@gmi-design-system/component/Recommend/home/Orange.svg'
import Image from 'next/image'
import * as styles from './index.css'
import { useClientSideRender } from './useClientSideRender'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

export default function Home() {
   const isClient = useClientSideRender()

   const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 2,
      swipeToSlide: true,
   }

   return (
      <>
         <div className={styles.HomeWrapper}>
            <HomeHeader />
            <div className={styles.RecommendWrapper}>
               <div className={styles.RecommendHeaderBox}>
                  <span className={styles.RecommendTitle}>추천 질문</span>
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
            )}
         </div>
         <hr className={styles.Line} />
      </>
   )
}
