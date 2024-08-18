'use client'

import { Button, Select, TextInput } from '@gds/component'
import { SignUpType } from '@entities/@types/signup'
import { ChangeEvent, Key, useState } from 'react'
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
import * as styles from './style.css'
import { useSendVerificationCodeByEmail } from '../api/mail'

export function ClientSignupPage() {
   const form = useSignupForm()
   const { mutateAsync: sendVerifyCodeByEmail } =
      useSendVerificationCodeByEmail()

   return (
      <>
         <Header title="회원가입" />
         <div className={styles.Wrapper}>
            <SignupInputSection
               form={form}
               onSendVerificationCodeByEmail={(targetEmail) => {
                  try {
                     sendVerifyCodeByEmail({ targetEmail })
                  } catch (error) {
                     console.log(error)
                  }
               }}
            />
            <div className={styles.FinalBtnBox}>
               <Button type="button" size="medium" variant="filled">
                  가입하기
               </Button>
            </div>
         </div>
      </>
   )
}
