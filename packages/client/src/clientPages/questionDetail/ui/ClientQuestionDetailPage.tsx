'use client'

import {
   QuestionInformationContainer,
   AnswerContainer,
} from '@widgets/QuestionDetail'
import { pageWrapper } from './style.css'

export function ClientQuestionDetailPage() {
   return (
      <div className={pageWrapper}>
         <QuestionInformationContainer />
         <AnswerContainer />
      </div>
   )
}
