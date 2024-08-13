import React from 'react'
import * as styles from './index.css'
import Image from 'next/image'

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
