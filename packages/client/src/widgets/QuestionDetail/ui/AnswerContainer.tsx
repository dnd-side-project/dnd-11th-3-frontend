'use client'

import { Button, TextInput } from '@gds/component'
import { useState } from 'react'
import { answerbuttonWrapper, answerInputWrapper } from './style.css'
import { AnswerCard } from './AnswerCard'

interface Props {
   onClick: (answer: string) => void
   isWriter: boolean
   bottomNode?: React.ReactNode
}

export function AnswerContainer({
   onClick,
   isWriter = true,
   bottomNode,
}: Props) {
   const [answer, setAnswer] = useState('')
   return (
      <div>
         <div className={answerInputWrapper}>
            {!isWriter && (
               <>
                  <TextInput
                     label="답변"
                     size="medium"
                     value={answer}
                     onChange={(e) => setAnswer(e.target.value)}
                     maxLength={400}
                     placeholder="10자 이상 입력해주세요."
                     minLength={10}
                  />
                  <div className={answerbuttonWrapper}>
                     <Button
                        variant="filled"
                        size="medium"
                        onClick={() => onClick(answer)}
                        disabled={answer === '' || answer.length < 10}
                     >
                        입력
                     </Button>
                  </div>
               </>
            )}
         </div>
         {bottomNode}
         <AnswerCard />
      </div>
   )
}
