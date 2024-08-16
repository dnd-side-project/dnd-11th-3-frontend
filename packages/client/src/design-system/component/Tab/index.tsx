import React from 'react'
import * as styles from './index.css'

interface TabProps {
   tabState: string
   setTabState: (state: string) => void
   tabs: { key: string; label: string }[]
}

function Tab({ tabState, setTabState, tabs }: TabProps) {
   const handleKeyPress = (
      event: React.KeyboardEvent<HTMLDivElement>,
      key: string,
   ) => {
      if (event.key === 'Enter' || event.key === ' ') {
         setTabState(key)
      }
   }

   return (
      <div className={styles.TabsWrapper}>
         {tabs.map(({ key, label }) => (
            <div
               key={key}
               className={styles.TabBox({
                  borderBottom: tabState === key,
               })}
               onClick={() => setTabState(key)}
               onKeyDown={(event) => handleKeyPress(event, key)}
               role="button"
               tabIndex={0}
            >
               <span>{label}</span>
            </div>
         ))}
      </div>
   )
}

export default Tab
