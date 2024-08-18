import React from 'react'
import Image from 'next/image'
import { IconBookmark, IconWhiteLike } from '@gds/icon'
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
            <div className={styles.CoinBox}>{/* <Credit coin={coin} /> */}</div>
            <span className={styles.TitleStyle}>{title}</span>
            <div className={styles.DetailWrapper}>
               <div className={styles.IconBox}>
                  <IconBookmark color="#FFF" />
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
