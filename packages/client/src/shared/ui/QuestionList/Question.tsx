import React from 'react'
import { IconBookmark, IconCredit, IconThumbUpFilled } from '@gds/icon'

import { Badge } from '@gds/component'
import { color } from '@gds/token'
import * as styles from './Question.css'

export interface QuestionData {
   tag: string
   reward: string
   title: string
   content: string
   date: string
   bookmark: number
   likes: number
   isChosen: boolean
}

interface Props {
   data: QuestionData
}

function Question({ data }: Props) {
   return (
      <div className={styles.QuestionWrapper}>
         <div className={styles.QuestionTagWrapper}>
            <div style={{ marginRight: '4px' }}>
               <Badge variant="outlined" size="small">
                  {data.tag}
               </Badge>
            </div>
            {data.isChosen ? (
               <Badge variant="primary" size="small">
                  채택완료
               </Badge>
            ) : (
               <Badge variant="secondary" size="small">
                  {data.reward} <IconCredit color={color['secondary-main']} />
               </Badge>
            )}
         </div>
         <div className={styles.QuestionTitleBox}>
            <span>{data.title}</span>
         </div>
         <div className={styles.QuestionContentBox}>{data.content}</div>
         <div className={styles.QuestionBottomWrapper}>
            <div className={styles.QuestionDateBox}>
               <span>{data.date}</span>
            </div>
            <div className={styles.QuestionDetailBox}>
               <div className={styles.QuestionIconBox}>
                  <IconBookmark />
               </div>
               <div className={styles.QuestionIconTxtBox}>{data.bookmark}</div>
               <div className={styles.QuestionIconBox} />
               <IconThumbUpFilled />
               <div className={styles.QuestionIconTxtBox}>{data.likes}</div>
            </div>
         </div>
      </div>
   )
}

export default Question
