'use client'

import React from 'react'
import { IconArrowRight } from '@gds/icon'
import { useRouter } from 'next/navigation'
import { IconButton } from '@gds/component'
import * as styles from './style.css'

export type AccountMenuItem = {
   smallTitle: string
   url: string
}

interface AccountMenuProps {
   title: string
   menuList: AccountMenuItem[]
}

export function AccountMenu({ title, menuList }: AccountMenuProps) {
   const router = useRouter()
   return (
      <div>
         <div>
            <span className={styles.TitleMenu}>{title}</span>
         </div>
         {menuList.map((menu) => (
            <div className={styles.UrlBox} key={menu.smallTitle}>
               <div>
                  <span className={styles.UrlMenu}>{menu.smallTitle}</span>
               </div>
               <div className={styles.IconBox}>
                  <IconButton
                     size="small"
                     variant="default"
                     onClick={() => router.push(menu.url)}
                     aria-label={`Go to ${menu.smallTitle}`}
                     icon={<IconArrowRight />}
                  />
               </div>
            </div>
         ))}
      </div>
   )
}
