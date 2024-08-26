'use client'

import { useSignupForm } from '@entities/signup'
import { Button } from '@gds/component'
import { Header, MainLoader } from '@shared/ui'
import { SignupInputSection } from '@widgets/SignupInputs'

import { usePostMember } from '@shared/api'
import { useRouter } from 'next/navigation'
import { PageURL } from '@shared/model'
import { useState } from 'react'
import * as styles from './style.css'

export function ClientSignupPage() {
   const form = useSignupForm()
   const {
      officialEmailVerified,
      nicknameVerified,
      jobCategory,
      jobGroup,
      officialEmail,
      nickname,
   } = form.watch()
   const { mutate: createMember, status } = usePostMember()
   const router = useRouter()
   const [submitError, setSubmitError] = useState<string | null>(null)

   return (
      <>
         <Header title="회원가입" />
         <MainLoader height={390} loading={status === 'pending'} />
         <div className={styles.Wrapper}>
            <SignupInputSection form={form} />
            <div className={styles.FinalBtnBox}>
               <Button
                  type="button"
                  size="medium"
                  variant="filled"
                  disabled={
                     !officialEmailVerified ||
                     !nicknameVerified ||
                     jobCategory === null ||
                     jobGroup === null ||
                     !nickname
                  }
                  onClick={() => {
                     createMember(
                        {
                           officialEmail,
                           nickname,
                           jobGroup: String(jobGroup?.id),
                           jobCategory: String(jobCategory?.id),
                        },
                        {
                           onSuccess: () => {
                              router.push(PageURL.SIGNUP_SUCCESS)
                           },
                           onError: (e) => {
                              console.log(e.message)
                              setSubmitError('회원가입에 실패했습니다.')
                           },
                        },
                     )
                  }}
               >
                  가입하기
               </Button>
            </div>
         </div>
      </>
   )
}
