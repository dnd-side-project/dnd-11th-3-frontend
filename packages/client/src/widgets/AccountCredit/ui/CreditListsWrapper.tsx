'use client'

import React, { useState } from 'react'
import * as styles from './style.css'
import CreditCategoryFilter from './CreditCategoryFilter'

function CreditListsWrapper() {
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
         </div>
      </div>
   )
}

export default CreditListsWrapper
