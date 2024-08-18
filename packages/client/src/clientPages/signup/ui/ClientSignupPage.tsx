'use client'

import { Button, Select, TextInput } from '@gds/component'
import { SignUpType } from '@entities/@types/signup'
import { ChangeEvent, Key, useEffect, useState } from 'react'
import { color } from '@gds/token'
import {
   Header,
   LabeledInputWithButton,
   UnlabeledInputWithButton,
} from '@shared/ui'
import { JOB_CATEGORIES } from '@shared/model'
import { IconSearch } from '@gds/icon'
import { SignupInputSection } from '@widgets/SignupInputs'
import { useSignupForm } from '@entities/signup'
import { PostTmpAccessTokenQueryKey, usePostTmpAccessToken } from '@shared/api'
import { useQueryClient } from '@tanstack/react-query'
import * as styles from './style.css'
import { useSendVerificationCodeByEmail } from '../api/mail'

export function ClientSignupPage() {
   const queryClient = useQueryClient()
   const accessToken =
      queryClient.getQueryData([PostTmpAccessTokenQueryKey]) || ''

   const form = useSignupForm()
   const { officialEmailVerified, nicknameVerified, jobCategory, jobGroup } =
      form.watch()
   const { mutateAsync: sendVerifyCodeByEmail } =
      useSendVerificationCodeByEmail()
   const { data } = usePostTmpAccessToken({
      dto: {
         socialEmail: `todoAfterKakaoLogin${Math.random()}@gmail.com`, // TODO: fix
         socialName: 'tmpTodoAfterKakaoLogin',
      },
      options: {
         enabled: accessToken != null,
      },
   })

   return (
      <>
         <Header title="회원가입" />
         <div className={styles.Wrapper}>
            <SignupInputSection
               form={form}
               onSendVerificationCodeByEmail={async (targetEmail) => {
                  try {
                     sendVerifyCodeByEmail({ targetEmail })
                  } catch (error) {
                     console.log(error)
                  }
               }}
            />
            <div className={styles.FinalBtnBox}>
               <Button
                  type="button"
                  size="medium"
                  variant="filled"
                  disabled={
                     !officialEmailVerified ||
                     !nicknameVerified ||
                     jobCategory === null ||
                     jobGroup === null
                  }
               >
                  가입하기
               </Button>
            </div>
         </div>
      </>
   )
}
