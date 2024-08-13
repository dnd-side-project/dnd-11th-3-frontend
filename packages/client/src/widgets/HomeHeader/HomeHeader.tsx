'use client'

import React, { useState } from 'react'
import {
   IconAlarm,
   // IconArrowDown,
   // IconArrowUp,
   IconBookmark,
   IconLogo,
} from '@gmi-design-system/icon'
import * as styles from './HomeHeader.css'

export function HomeHeader() {
   const [isExpand, setIsExpand] = useState<boolean>(false)

   const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
         setIsExpand(!isExpand)
      }
   }

   return (
      <div className={styles.homeheaderWrapper}>
         <div className={styles.homelogoBox}>
            <IconLogo />
         </div>
         <div
            className={styles.categoryWrapper}
            onClick={() => setIsExpand(!isExpand)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
         >
            <span className={styles.categoryTitle}>전체</span>
            <button
               type="button"
               className={styles.categoryDownBtn}
               aria-label="expand category"
            >
               {/* {isExpand ? <IconArrowUp /> : <IconArrowDown />} */}
            </button>
         </div>
         {isExpand && (
            <div className={styles.categoryFilterWrapper}>
               <div className={styles.categoryFilterTitle}>전체</div>
               <div className={styles.categoryFilterTitle}>유저직군</div>
            </div>
         )}
         <div className={styles.headerButtonWrapper}>
            <div className={styles.headerIconBox}>
               <IconBookmark />
            </div>
            <div className={styles.headerIconBox}>
               <IconAlarm />
            </div>
         </div>
      </div>
   )
}
