'use client'

import { NotificationCard } from '@entities/notification'
import { useState } from 'react'

export function ClientNotificationPage() {
   const [sort, setSort] = useState('') // TODO: Implement sorting after ask be
   return (
      <>
         <NotificationCard isRead={false} />
      </>
   )
}
