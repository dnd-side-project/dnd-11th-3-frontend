import React from 'react'
import AccountBookmarkClient from './client'
import { QuestionData } from '../../home/page'
import * as styles from '../index.css'

function AccountBookmark() {
   return (
      <div className={styles.Wrapper}>
         <AccountBookmarkClient QuestionData={QuestionData} />
      </div>
   )
}

export default AccountBookmark
