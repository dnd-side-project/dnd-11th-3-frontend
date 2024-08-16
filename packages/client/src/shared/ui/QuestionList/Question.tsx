import React from 'react'
import { IconBookmark, IconLikesDefault } from '@gmi-design-system/icon'
import { AdoptTag, CreditTag, JobListTag } from '@gds/component'
import * as styles from './Question.css'

export interface QuestionData {
   tag: string
   reward: string
   title: string
   content: string
   date: string
   bookmark: number
   likes: number
}

interface Props {
   data: QuestionData
}

function Question({ data }: Props) {
   return (
      <div className={styles.QuestionWrapper}>
         <div className={styles.QuestionTagWrapper}>
            {/** TODO: 디자인시스템 작성 필요 */}
            <JobListTag name={data.tag} />
            <div className={styles.TagBox}>
               <AdoptTag />
            </div>
            <div className={styles.TagBox}>
               <CreditTag coin={data.reward} />
            </div>
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
               <IconLikesDefault />
               <div className={styles.QuestionIconTxtBox}>{data.likes}</div>
            </div>
         </div>
      </div>
   )
}

export default Question
