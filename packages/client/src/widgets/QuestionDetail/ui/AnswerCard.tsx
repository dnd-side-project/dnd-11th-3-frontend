'use client'

import { Button } from '@gds/component'
import { IconChat, IconCheck, IconCheckFilled } from '@gds/icon'
import { color, Typo } from '@gds/token'
import { AnswerDetailResponse } from '@server-api/api'
import { usePostCreateChatRoom } from 'src/clientPages/questionDetail/api/chat'
import {
   answerCardWrapper,
   answerMetaWrapper,
   answerProfileBox,
   answerProfileWrapper,
   answerUserWrapper,
   selectAnswerButtonWrapper,
   selectAnswerWrapper,
} from './style.css'

interface Props {
   answerSelectDone?: boolean
   answerData: AnswerDetailResponse
   userId?: number
   questionPostId?: number
}

export function AnswerCard({
   answerSelectDone,
   answerData,
   userId,
   questionPostId,
}: Props) {
   if (!answerData) return <></>
   const {
      mutate: createChatRoom,
      isError: createChatRoomIsError,
      error: createChatRoomError,
   } = usePostCreateChatRoom()

   if (createChatRoomIsError) {
      // TODO: toast로 수정 필요
      alert(createChatRoomError.message || '서버오류 발생')
   }

   return (
      <div className={answerCardWrapper}>
         <div className={answerMetaWrapper}>
            <div className={answerUserWrapper}>
               <div className={answerProfileWrapper}>
                  <div className={answerProfileBox} />
               </div>
               <p
                  className={Typo.body1.sb}
                  style={{
                     color:
                        userId === answerData?.memberInfo?.memberId
                           ? color['secondary-dark']
                           : color.black,
                  }}
               >
                  {answerData.memberInfo?.nickname}
                  {userId === answerData?.memberInfo?.memberId && ' (나)'}
               </p>
               <p
                  className={Typo.body2.md}
                  style={{ color: color['gray-400'] }}
               >
                  {answerData.memberInfo?.memberJobGroup}
               </p>
            </div>
            <p className={Typo.body2.md}>
               {new Date(String(answerData.createdAt)).toLocaleDateString()}
            </p>
         </div>
         <p className={Typo.body2.md}>{answerData.content}</p>
         <div className={selectAnswerWrapper}>
            <div className={selectAnswerButtonWrapper}>
               <Button
                  onClick={() => {
                     if (questionPostId && answerData.answerId) {
                        createChatRoom({
                           questionPostId,
                           answerId: answerData.answerId,
                        })
                     }
                  }}
                  disabled={answerSelectDone}
                  variant={answerSelectDone ? 'filled' : 'outlined'}
                  size="small"
                  rightIcon={
                     answerData?.isChosen ? (
                        <IconChat size={16} />
                     ) : (
                        <IconChat size={16} color={color['primary-main']} />
                     )
                  }
               >
                  채팅
               </Button>
            </div>
            <div className={selectAnswerButtonWrapper}>
               <Button
                  onClick={() => alert('서비스 준비중입니다.')}
                  disabled={answerSelectDone}
                  variant={answerData?.isChosen ? 'filled' : 'outlined'}
                  size="small"
                  rightIcon={
                     answerData?.isChosen ? (
                        <IconCheck size={16} />
                     ) : (
                        <IconCheckFilled
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
