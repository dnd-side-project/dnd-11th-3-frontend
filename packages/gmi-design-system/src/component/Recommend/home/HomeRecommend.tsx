import React from 'react'
import * as styles from './index.css'
import Image from 'next/image'

export interface HomeRecommendProps {
  src: string
  coin: string
  title: string
  bookmark: number
  likes: number
}

const HomeRecommend = ({ src, coin, title, bookmark, likes }: HomeRecommendProps) => {
  return (
    <div className={styles.RecommendItem}>
      {/* FIX - width, height 값 필수입니다.(임시 적용) */}
      <Image src={src} alt="recommend Image" width={200} height={200} />
      <div className={styles.overlay}>
        <div className={styles.CoinBox}>{coin}</div>
        <span>{title}</span>
        <div className={styles.DetailWrapper}>
          <div className={styles.IconBox}></div>
          <div className={styles.NumberBox}>{bookmark}</div>
          <div className={styles.IconBox}></div>
          <div className={styles.NumberBox}>{likes}</div>
        </div>
      </div>
    </div>
  )
}

export default HomeRecommend
