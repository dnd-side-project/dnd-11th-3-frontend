'use client'

import { Button, TextInput } from '@gds/component'
import { color, Typo } from '@gds/token'
import {
   answerbuttonWrapper,
   answerCardWrapper,
   answerInputWrapper,
   answerMetaWrapper,
   answerProfileBox,
   answerProfileWrapper,
   answerUserWrapper,
   selectAnswerButtonWrapper,
   selectAnswerWrapper,
} from './style.css'

export function AnswerCard() {
   return (
      <div className={answerCardWrapper}>
         <div className={answerMetaWrapper}>
            <div className={answerUserWrapper}>
               <div className={answerProfileWrapper}>
                  <div className={answerProfileBox} />
               </div>
               <p className={Typo.body1.sb}>닉네임</p>
               <p className={Typo.body2.md}>직무</p>
            </div>
            <p className={Typo.body2.md}>{new Date().toLocaleDateString()}</p>
         </div>
         <p className={Typo.body1.lg}>답변 내용</p>
         <div className={selectAnswerWrapper}>
            <div className={selectAnswerButtonWrapper}>
               <Button variant="outlined" size="small">
                  대화
               </Button>
            </div>
            <div className={selectAnswerButtonWrapper}>
               <Button variant="outlined" size="small">
                  채택
               </Button>
            </div>
         </div>
      </div>
   )
}
