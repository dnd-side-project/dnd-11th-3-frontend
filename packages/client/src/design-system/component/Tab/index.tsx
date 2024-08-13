import React from 'react'
import * as styles from './index.css'

interface TabProps {
   tabState: 'write' | 'answer'
   setTabState: (state: 'write' | 'answer') => void
}

function Tab({ tabState, setTabState }: TabProps) {
   const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
         setTabState(tabState === 'write' ? 'answer' : 'write')
      }
   }

   return (
      <div className={styles.TabsWrapper}>
         <div
            className={styles.TabBox({
               borderBottom: tabState === 'write',
            })}
            onClick={() => setTabState('write')}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
         >
            <span>작성한 질문</span>
         </div>
         <div
            className={styles.TabBox({
               borderBottom: tabState === 'answer',
            })}
            onClick={() => setTabState('answer')}
            onKeyDown={handleKeyPress}
            role="button"
            tabIndex={0}
         >
            <span>답변 단 질문</span>
         </div>
      </div>
   )
}

export default Tab
