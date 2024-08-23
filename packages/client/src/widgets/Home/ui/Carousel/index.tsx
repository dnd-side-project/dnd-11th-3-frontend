import Blue from 'public/asset/Carousel/blue.svg'
import Green from 'public/asset/Carousel/green.svg'
import Orange from 'public/asset/Carousel/orange.svg'
import './slider.css'
import Slider from 'react-slick'
import { PageResponseQuestionPostSimpleResponse } from '@server-api/api'
import * as styles from './index.css'
import HomeRecommend from '../Recommend'

interface Props {
   data?: PageResponseQuestionPostSimpleResponse
}

export function Carousel({ data }: Props) {
   const imageUrl = [Blue, Green, Orange]
   const settings = {
      className: 'center',
      infinite: true,
      slidesToShow: 2,
      swipeToSlide: true,
   }

   return (
      <div className={styles.RecommendContentBox}>
         <div className="slider-container">
            {data?.content?.length === 1 ? (
               data?.content?.map((question, idx) => {
                  return (
                     <HomeRecommend
                        key={question.questionPostId}
                        src={imageUrl[idx % 3]}
                        reward={question.reward}
                        title={question.title}
                        savedCount={question.savedCount}
                        recommendCount={question.recommendCount}
                        questionPostId={question.questionPostId}
                     />
                  )
               })
            ) : (
               <Slider
                  className={settings.className}
                  infinite={settings.infinite}
                  slidesToShow={settings.slidesToShow}
                  swipeToSlide={settings.swipeToSlide}
               >
                  {data?.content?.map((question, idx) => {
                     return (
                        <HomeRecommend
                           key={question.questionPostId}
                           src={imageUrl[idx % 3]}
                           reward={question.reward}
                           title={question.title}
                           savedCount={question.savedCount}
                           recommendCount={question.recommendCount}
                           questionPostId={question.questionPostId}
                        />
                     )
                  })}
               </Slider>
            )}
         </div>
      </div>
   )
}
