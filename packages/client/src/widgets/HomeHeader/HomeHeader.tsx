'use client'

import {
   IconAlarm,
   IconArrowDown,
   IconBookmark,
   IconLogoFilled,
} from '@gds/icon'

import { IconButton, Select } from '@gds/component'
import * as styles from './HomeHeader.css'

interface Props {
   selectedCategory: {
      label: string
      id: string
   }
   onSelectCategory: ({ label, id }: { label: string; id: string }) => void
}

export function HomeHeader({ selectedCategory, onSelectCategory }: Props) {
   return (
      <div className={styles.homeheaderWrapper}>
         <div className={styles.homelogoBox}>
            <IconLogoFilled size={26} />
         </div>
         <div className={styles.categoryWrapper}>
            <Select
               inputProps={{
                  icon: <IconArrowDown size={16} />,
               }}
               width={120}
               variant="textOnly"
               items={[
                  {
                     label: '전체',
                     id: 'all',
                  },
                  { label: '유저직군', id: 'user' },
               ]}
               selected={selectedCategory}
               onSelect={({ id, label }) =>
                  onSelectCategory({ id: String(id), label })
               }
            />
         </div>
         <div className={styles.headerButtonWrapper}>
            <IconButton
               size="small"
               variant="default"
               icon={<IconBookmark size={24} />}
            />
            <IconButton
               size="small"
               variant="default"
               icon={<IconAlarm size={24} />}
            />
         </div>
      </div>
   )
}
