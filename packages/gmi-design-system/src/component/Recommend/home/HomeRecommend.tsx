import React from 'react'
import * as styles from './index.css'
import Image from 'next/image'
import Credit from '../../Tag/Credit'
import { IconThumbUp, IconBookmark } from '../../../icon'
import { color } from '@gds/token'

interface HomeRecommendProps {
  src: string
  coin: string
  title: string
  bookmark: number
  likes: number
}

const HomeRecommend = ({ src, coin, title, bookmark, likes }: HomeRecommendProps) => {
  return (
    <div className={styles.RecommendItem}>
      <Image src={src} alt="recommend Image" />
      <div className={styles.overlay}>
        <div className={styles.CoinBox}>
          <Credit coin={coin} />
        </div>
        <span className={styles.TitleStyle}>{title}</span>
        <div className={styles.DetailWrapper}>
          <div className={styles.IconBox}>
            <IconBookmark color={color.white} />
          </div>
          <div className={styles.NumberBox}>{bookmark}</div>
          <div className={styles.IconBox}>
            <IconThumbUp color={color.white} />
          </div>
          <div className={styles.NumberBox}>{likes}</div>
        </div>
      </div>
    </div>
  )
}

export default HomeRecommend
