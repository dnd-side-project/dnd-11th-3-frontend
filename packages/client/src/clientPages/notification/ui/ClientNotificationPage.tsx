'use client'

import { NotificationCard } from '@entities/notification'
import { useState } from 'react'
import * as styles from './style.css'

const ROWS_PER_PAGE = 40 // 한 페이지당 불러올 상품개수
const SESSIONSTORAGE_KEY = 'clickedSearchProduct'

export function ClientNotificationPage() {
   const [sort, setSort] = useState('') // TODO: Implement sorting after ask be
   const [isPrefetchData, setIsPrefetchData] = useState(false)

   return (
      <div className={styles.container}>
         <NotificationCard isRead={false} />
      </div>
   )
}
