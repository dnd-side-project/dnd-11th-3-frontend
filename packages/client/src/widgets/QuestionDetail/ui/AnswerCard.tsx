'use client'

import { Button } from '@gds/component'
import { IconChat, IconCheckCircle, IconCheckCircleFilled } from '@gds/icon'
import { color, Typo } from '@gds/token'
import {
   answerCardWrapper,
   answerMetaWrapper,
   answerProfileBox,
   answerProfileWrapper,
   answerUserWrapper,
   selectAnswerButtonWrapper,
   selectAnswerWrapper,
} from './style.css'

export function AnswerCard() {
   const isSelected = false

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
            <p className={Typo.body2.md}>{new Date().toLocaleString()}</p>
         </div>
         <p className={Typo.body1.lg}>답변 내용</p>
         <div className={selectAnswerWrapper}>
            <div className={selectAnswerButtonWrapper}>
               <Button
                  variant={isSelected ? 'filled' : 'outlined'}
                  size="small"
                  rightIcon={
                     isSelected ? (
                        <IconChat size={16} />
                     ) : (
                        <IconChat size={16} color={color['primary-main']} />
                     )
                  }
               >
                  채택
               </Button>
            </div>
            <div className={selectAnswerButtonWrapper}>
               <Button
                  variant={isSelected ? 'filled' : 'outlined'}
                  size="small"
                  rightIcon={
                     isSelected ? (
                        <IconCheckCircle size={16} />
                     ) : (
                        <IconCheckCircleFilled
                           size={16}
                           color={color['primary-main']}
                        />
                     )
                  }
               >
                  채택
               </Button>
            </div>
         </div>
      </div>
   )
}
