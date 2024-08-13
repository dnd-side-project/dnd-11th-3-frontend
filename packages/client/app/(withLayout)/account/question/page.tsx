'use client'

import React, { useState } from 'react'
import Tab from 'src/design-system/component/Tab'
import * as styles from './index.css'

function AccountQuestion() {
   const [tabState, setTabState] = useState<'write' | 'answer'>('write')

   return (
      <div className={styles.Wrapper}>
         <Tab tabState={tabState} setTabState={setTabState} />
         <div className={styles.ListWrapper} />
      </div>
   )
}

export default AccountQuestion
