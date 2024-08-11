'use client'

import React, { useState } from 'react'
import {
   IconAlarm,
   IconArrowDown,
   IconArrowUp,
   IconBookmark,
   IconLogo,
} from '@gmi-design-system/icon'
import {
   categoryDownBtn,
   categoryFilterTitle,
   categoryFilterWrapper,
   categoryTitle,
   categoryWrapper,
   headerButtonWrapper,
   headerIconBox,
   homeheaderWrapper,
   homelogoBox,
} from './HomeHeader.css'

export function HomeHeader() {
   const [isExpand, setIsExpand] = useState<boolean>(false)

   const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
         setIsExpand(!isExpand)
      }
   }

   return (
      <div className={homeheaderWrapper}>
         <div className={homelogoBox}>
            <IconLogo />
         </div>
         <div
            className={categoryWrapper}
            onClick={() => setIsExpand(!isExpand)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
         >
            <span className={categoryTitle}>전체</span>
            <button
               type="button"
               className={categoryDownBtn}
               aria-label="expand category"
            >
               {isExpand ? <IconArrowUp /> : <IconArrowDown />}
            </button>
         </div>
         {isExpand && (
            <div className={categoryFilterWrapper}>
               <div className={categoryFilterTitle}>전체</div>
               <div className={categoryFilterTitle}>유저직군</div>
            </div>
         )}
         <div className={headerButtonWrapper}>
            <div className={headerIconBox}>
               <IconBookmark />
            </div>
            <div className={headerIconBox}>
               <IconAlarm />
            </div>
         </div>
      </div>
   )
}
