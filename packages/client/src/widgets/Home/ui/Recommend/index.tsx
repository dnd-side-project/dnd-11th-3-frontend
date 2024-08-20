import Image from 'next/image'
import { IconBookmark, IconCredit, IconWhiteLike } from '@gds/icon'
import { Badge } from '@gds/component'
import { color } from '@gds/token'
import * as styles from './index.css'

interface HomeRecommendProps {
   src: string
   coin: string
   title: string
   bookmark: number
   likes: number
}

function HomeRecommend({
   src,
   coin,
   title,
   bookmark,
   likes,
}: HomeRecommendProps) {
   return (
      <div className={styles.RecommendItem}>
         <Image src={src} alt="recommend Image" />
         <div className={styles.overlay}>
            <div className={styles.CoinBox}>
               <Badge variant="secondary" size="small">
                  {coin} <IconCredit color={color['secondary-main']} />
               </Badge>
            </div>
            <span className={styles.TitleStyle}>{title}</span>
            <div className={styles.DetailWrapper}>
               <div className={styles.IconBox}>
                  <IconBookmark color="#FFF" size={10} />
               </div>
               <div className={styles.NumberBox}>{bookmark}</div>
               <div className={styles.IconBox}>
                  <IconWhiteLike />
               </div>
               <div className={styles.NumberBox}>{likes}</div>
            </div>
         </div>
      </div>
   )
}

export default HomeRecommend
