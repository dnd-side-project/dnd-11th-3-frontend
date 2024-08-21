'use client'

import { useState } from 'react'
import * as styles from './style.css'
import CreditCategoryFilter from './CreditCategoryFilter'
import { CreditList, CreditProps } from './CreditList'

function CreditListsWrapper() {
   const CreditData: CreditProps[] = [
      {
         profile: '마라탕후로',
         title: '채택 받은 답변',
         time: '14:00',
         creditAmount: 3000,
         creditId: 1,
         isPlus: true,
      },
      {
         profile: '마라탕후로',
         title: '채택 받은 답변',
         time: '14:00',
         creditAmount: 3000,
         creditId: 2,
         isPlus: false,
      },
      {
         profile: '마라탕후로',
         title: '채택 받은 답변',
         time: '14:00',
         creditAmount: 3000,
         creditId: 3,
         isPlus: true,
      },
   ]

   const [creditCategory, setCreditCategory] = useState({
      label: '전체',
      id: 'all',
   })

   return (
      <div className={styles.CreditsContainer}>
         <div className={styles.SelectBox}>
            <CreditCategoryFilter
               selectedCategory={creditCategory}
               onSelectCategory={setCreditCategory}
            />
            <span className={styles.DateTxt}>오늘</span>
            {CreditData.map((credit) => {
               return (
                  <CreditList
                     profile={credit.profile}
                     time={credit.time}
                     title={credit.title}
                     creditAmount={credit.creditAmount}
                     key={credit.creditId}
                     creditId={credit.creditId}
                     isPlus={credit.isPlus}
                  />
               )
            })}
         </div>
      </div>
   )
}

export default CreditListsWrapper
