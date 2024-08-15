import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'

// import dynamic from 'next/dynamic'
// import Green from '@gmi-design-system/component/Recommend/home/Green.svg'
// import Blue from '@gmi-design-system/component/Recommend/home/Blue.svg'
// import Orange from '@gmi-design-system/component/Recommend/home/Orange.svg'
// import { useScrollHandler } from '@features/useScrollHandler'
import Question from '@shared/ui/QuestionList/Question'
// import { IconArrowRight } from '@gds/icon'
// import HomeRecommend from '@gmi-design-system/component/Recommend/home/HomeRecommend'
import { FloatButton, Badge, Button } from '@gds/component'

import './slider.css'
import * as styles from './index.css'

// const Slider = dynamic(() => import('react-slick'), { ssr: false }) // ui 컴포넌트로 분리해서 csr로 처리해주세요

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
   // const settings = {
   //    className: 'center',
   //    infinite: true,
   //    slidesToShow: 1,
   //    swipeToSlide: true,
   //    nextArrow: (
   //       <div className={styles.ArrowBox}>{/* <IconArrowRight /> */}</div>
   //    ),
   // }

   const fixed = false
   // useScrollHandler(setFixed, 'nav-section')

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
               TODO: isClient를 사용하지 말고 캐러셀을 순수 컴포넌트로 따로
               만들어주세요
               {/* {isClient && (
                  <div className="slider-container">
                     <Slider
                        className={settings.className}
                        infinite={settings.infinite}
                        slidesToShow={settings.slidesToShow}
                        swipeToSlide={settings.swipeToSlide}
                        nextArrow={settings.nextArrow}
                     >
                        TODO: 디자인 시스템에 포함 시키고 싶으면 Card 로
                        네이밍해서 추가해주세요
                        {/** TODO: 데이터 형식으로 변경하기 */}
               {/* <HomeRecommendCard
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
                        
                     </Slider>
                  </div>
               )} 
               */}
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
                        <Badge size="small" variant="primary">
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
