'use client'

import { IconBookmark, IconCredit, IconThumbUp } from '@gds/icon'
import { Badge } from '@gds/component'
import { color } from '@gds/token'
import {
   AnsweredQuestionPostsResponse,
   QuestionPostSimpleResponse,
   QuestionPostsResponse,
} from '@server-api/api'
import { useRouter } from 'next/navigation'
import { getAnswerQuestionField, getQuestionFields } from '@features/account'
import * as styles from './Question.css'

interface Props {
   data:
      | QuestionPostSimpleResponse
      | QuestionPostsResponse
      | AnsweredQuestionPostsResponse
}

function Question({ data }: Props) {
   const router = useRouter()
   const { title, content, savedCount } = getQuestionFields(data)
   const { createdAt } = getAnswerQuestionField(data)
   return (
      <div className={styles.QuestionWrapper}>
         <div className={styles.QuestionTagWrapper}>
            <div style={{ marginRight: '4px' }}>
               <Badge variant="outlined" size="small">
                  {data.jobGroup}
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
         <div
            className={styles.OnClickStyle}
            onClick={() => {
               router.push(`/question/${data.questionPostId}`)
            }}
            onKeyDown={(e) => {
               if (e.key === 'Enter' || e.key === 'Spacebar') {
                  router.push(`/question/${data.questionPostId}`)
               }
            }}
            role="button"
            tabIndex={0}
         >
            <div className={styles.QuestionTitleBox}>
               <span>{title}</span>
            </div>
            <div className={styles.QuestionContentBox}>{content}</div>
         </div>
         <div className={styles.QuestionBottomWrapper}>
            <div className={styles.QuestionDateBox}>
               <span>{new Date(String(createdAt))?.toLocaleDateString()}</span>
            </div>
            <div className={styles.QuestionDetailBox}>
               <div className={styles.QuestionIconBox}>
                  <IconBookmark color={color['gray-300']} />
               </div>
               <div className={styles.QuestionIconTxtBox}>{savedCount}</div>
               <div className={styles.QuestionIconBox} />
               <IconThumbUp color={color['gray-300']} />
               <div className={styles.QuestionIconTxtBox}>
                  {data.recommendCount}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Question
