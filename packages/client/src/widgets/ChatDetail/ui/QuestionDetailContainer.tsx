import { Typo } from '@gds/token'
import { flexColumn } from '@shared/ui/DisplayFlex/style.css'
import Link from 'next/link'
import * as styles from './style.css'

interface Props {
   jobGroup?: string
   title?: string
   questionPostId?: number
}

function QuestionDetailContainer({ jobGroup, title, questionPostId }: Props) {
   return (
      <div className={styles.questionContainer}>
         <div className={flexColumn}>
            <span className={styles.questionJobGroupTag}>{jobGroup} 질문</span>
            <span className={Typo.body2.sb}>{title}</span>
         </div>
         <Link href={`/question/${questionPostId}`}>
            <div className={flexColumn}>
               <button type="button" className={styles.goBackQuestionBtn}>
                  질문으로 돌아가기
               </button>
            </div>
         </Link>
      </div>
   )
}

export default QuestionDetailContainer
