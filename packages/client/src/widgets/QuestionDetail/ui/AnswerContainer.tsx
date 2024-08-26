'use client'

import { Button, TextInput } from '@gds/component'
import { useState } from 'react'
import { color, Typo } from '@gds/token'
import { IconAlarm, IconCheckFilled, PrimarySmile } from '@gds/icon'
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
            {isWriter ? (
               <div
                  style={{
                     color: color['primary-dark'],
                     marginBottom: 16,
                     display: 'flex',
                     flexDirection: 'column',
                     gap: 8,
                     alignItems: 'center', // TODO: fix style with VE
                  }}
                  className={Typo.body2.sb}
               >
                  <PrimarySmile size={40} />
                  질문 작성자는 답변을 작성할 수 없습니다.
               </div>
            ) : (
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
      </div>
   )
}
