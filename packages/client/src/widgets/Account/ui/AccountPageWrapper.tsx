import React from 'react'
import * as styles from './style.css'
import ProfileCard from './ProfileCard'

export function AccountPageWrapper() {
   return (
      <div className={styles.Wrapper}>
         <span className={styles.Header}>마이페이지</span>
         <ProfileCard />
      </div>
   )
}
