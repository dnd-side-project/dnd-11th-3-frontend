'use client'

import { SearchHeader } from '@widgets/Search'
import {
   MultiSelect,
   SelectItemType,
} from 'src/design-system/component/MultiSelect'
import { IconFilter } from '@gds/icon'
import { useState } from 'react'
import { JOB_GROUPS } from '@shared/model/job'
import * as styles from './style.css'

export function ClientSearchPage() {
   const [selectedJobGroups, setSelectedJobGroups] = useState<SelectItemType[]>(
      [],
   )

   const handleSelect = (selectedItems: SelectItemType[]) => {
      if (selectedItems.length <= 3) {
         setSelectedJobGroups(selectedItems)
      }
   }

   return (
      <div className={styles.Container}>
         <SearchHeader />
         <div className={styles.MulitSelectBox}>
            <MultiSelect
               variant="default"
               inputProps={{
                  icon: <IconFilter />,
               }}
               onSelect={handleSelect}
               selected={selectedJobGroups}
               placeholder="직군 3개까지 선택 가능합니다."
               items={JOB_GROUPS.map((jobGroup) => ({
                  id: jobGroup,
                  label: jobGroup,
               }))}
            />
         </div>
      </div>
   )
}
