'use client'

import React from 'react'
import { IconArrowRight } from '@gds/icon'
import { useRouter } from 'next/navigation'
import * as styles from './style.css'

export type AccountMenuItem = {
   smallTitle: string
   url: string
}

interface AccountMenuProps {
   title: string
   menuList: AccountMenuItem[]
}

function AccountMenu({ title, menuList }: AccountMenuProps) {
   const router = useRouter()
   return (
      <div>
         <div>
            <span className={styles.titleMenu}>{title}</span>
         </div>
         {menuList.map((menu) => (
            <div className={styles.urlBox} key={menu.smallTitle}>
               <div>
                  <span className={styles.urlMenu}>{menu.smallTitle}</span>
               </div>
               <button
                  type="button"
                  onClick={() => router.push(menu.url)}
                  className={styles.iconBox}
                  aria-label={`Go to ${menu.smallTitle}`}
               >
                  <IconArrowRight />
               </button>
            </div>
         ))}
      </div>
   )
}

export default AccountMenu
