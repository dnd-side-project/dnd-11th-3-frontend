import Image from 'next/image'
import { IconBookmark, IconCredit, IconThumbUp } from '@gds/icon'
import { Badge } from '@gds/component'
import { color } from '@gds/token'
import { QuestionPostSimpleResponse } from '@server-api/api'
import { useRouter } from 'next/navigation'
import * as styles from './index.css'

interface HomeRecommendProps extends QuestionPostSimpleResponse {
   src: string
}

function HomeRecommend({
   src,
   title,
   reward,
   savedCount,
   recommendCount,
   questionPostId,
}: HomeRecommendProps) {
   const router = useRouter()

   const handleOnClickRecommendQuestion = () => {
      router.push(`/question/${questionPostId}`)
   }

   return (
      <div className={styles.RecommendItem}>
         <Image src={src} alt="recommend Image" />
         <div className={styles.Overlay}>
            <div className={styles.CoinBox}>
               <Badge variant="secondary" size="small">
                  {reward}
                  <IconCredit color={color['secondary-main']} />
               </Badge>
            </div>
            <span
               className={styles.TitleStyle}
               onClick={handleOnClickRecommendQuestion}
               onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === 'Spacebar') {
                     handleOnClickRecommendQuestion()
                  }
               }}
               role="button"
               tabIndex={0}
            >
               {title}
            </span>
            <div className={styles.DetailWrapper}>
               <div>
                  <IconBookmark color={color.white} size={15} />
               </div>
               <div className={styles.NumberBox}>{savedCount}</div>
               <div>
                  <IconThumbUp color={color.white} size={15} />
               </div>
               <div className={styles.NumberBox}>{recommendCount}</div>
            </div>
         </div>
      </div>
   )
}

export default HomeRecommend
