'use client'

import { Button, TextInput } from '@gds/component'
import { answerbuttonWrapper, answerInputWrapper } from './style.css'
import { AnswerCard } from './AnswerCard'

export function AnswerContainer() {
   return (
      <div>
         <div className={answerInputWrapper}>
            <TextInput label="답변" />
            <div className={answerbuttonWrapper}>
               <Button variant="filled" size="medium">
                  입력
               </Button>
            </div>
         </div>
         <AnswerCard />
      </div>
   )
}
