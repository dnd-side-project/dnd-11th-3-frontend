import Blue from 'public/asset/Carousel/blue.svg'
import Green from 'public/asset/Carousel/green.svg'
import Orange from 'public/asset/Carousel/orange.svg'
import './slider.css'
import Slider from 'react-slick'
import { useRecommendList } from 'src/clientPages/home/api/getRecommend'
import * as styles from './index.css'
import HomeRecommend from '../Recommend'

export function Carousel() {
   const imageUrl = [Blue, Green, Orange]
   const settings = {
      className: 'center',
      infinite: true,
      slidesToShow: 2,
      swipeToSlide: true,
   }

   const { data: recommendQuestions } = useRecommendList({
      pageable: {
         page: 1,
         size: 10,
      },
   })

   return (
      <div className={styles.RecommendContentBox}>
         <div className="slider-container">
            <Slider
               className={settings.className}
               infinite={settings.infinite}
               slidesToShow={settings.slidesToShow}
               swipeToSlide={settings.swipeToSlide}
            >
               {recommendQuestions?.content?.map((question, idx) => {
                  return (
                     <HomeRecommend
                        key={question.questionPostId}
                        src={imageUrl[idx % 3]}
                        reward={question.reward}
                        title={question.title}
                        savedCount={20}
                        recommendCount={4}
                     />
                  )
               })}
            </Slider>
         </div>
      </div>
   )
}
