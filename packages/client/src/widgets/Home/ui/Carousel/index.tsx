import React from 'react'
import dynamic from 'next/dynamic'

import Blue from 'public/asset/Carousel/blue.svg'
import Green from 'public/asset/Carousel/Green.svg'
import Orange from 'public/asset/Carousel/Orange.svg'
import HomeRecommend from '../Recommend'
import './slider.css'
import * as styles from './index.css'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

export function Carousel() {
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

   return (
      <div className={styles.RecommendContentBox}>
         <div className="slider-container">
            <Slider
               className={settings.className}
               infinite={settings.infinite}
               slidesToShow={settings.slidesToShow}
               swipeToSlide={settings.swipeToSlide}
               nextArrow={settings.nextArrow}
            >
               <HomeRecommend
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
               />
            </Slider>
         </div>
      </div>
   )
}
