import React from 'react'
import { IconEnter } from 'src/design-system/icon/default/IconEnter'
import * as styles from './index.css'

interface AnswerProps {
   text?: string
   date?: string
}

function AnswerBox({ text, date }: AnswerProps) {
   return (
      <div className={styles.BottomLine}>
         <div className={styles.Wrapper}>
            <div className={styles.TopWrapper}>
               <div className={styles.IconBox}>
                  <IconEnter />
               </div>
               <div className={styles.TxtBox}>
                  <span>{text}</span>
               </div>
            </div>
            <div className={styles.DateBox}>
               <span>
                  {new Date(String(date))?.toLocaleDateString()}{' '}
                  {date?.slice(11, 16)}
               </span>
            </div>
         </div>
      </div>
   )
}

export default AnswerBox
