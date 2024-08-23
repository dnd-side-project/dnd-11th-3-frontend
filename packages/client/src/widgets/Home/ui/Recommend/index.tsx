import Image from 'next/image'
import { IconBookmark, IconCredit, IconWhiteLike } from '@gds/icon'
import { Badge } from '@gds/component'
import { color } from '@gds/token'
import { QuestionPostSimpleResponse } from '@server-api/api'
import { formatNumberWithCommas } from '@shared/utils/formatNumberWithCommas'
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
      <div
         className={styles.RecommendItem}
         onClick={handleOnClickRecommendQuestion}
         onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Spacebar') {
               handleOnClickRecommendQuestion()
            }
         }}
         role="button"
         tabIndex={0}
      >
         <Image src={src} alt="recommend Image" />
         <div className={styles.overlay}>
            <div className={styles.CoinBox}>
               <Badge variant="secondary" size="small">
                  {formatNumberWithCommas(reward ?? 0)}
                  <IconCredit color={color['secondary-main']} />
               </Badge>
            </div>
            <span className={styles.TitleStyle}>{title}</span>
            <div className={styles.DetailWrapper}>
               <div>
                  <IconBookmark color={color.white} size={15} />
               </div>
               <div className={styles.NumberBox}>{savedCount}</div>
               <div>
                  <IconWhiteLike size={15} />
               </div>
               <div className={styles.NumberBox}>{recommendCount}</div>
            </div>
         </div>
      </div>
   )
}

export default HomeRecommend
