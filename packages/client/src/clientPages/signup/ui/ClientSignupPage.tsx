'use client'

import { useSignupForm } from '@entities/signup'
import { Button } from '@gds/component'
import { Header } from '@shared/ui'
import { SignupInputSection } from '@widgets/SignupInputs'
import { useSendVerificationCodeByEmail } from '../api/mail'
import * as styles from './style.css'

export function ClientSignupPage() {
   const form = useSignupForm()
   const { officialEmailVerified, nicknameVerified, jobCategory, jobGroup } =
      form.watch()

   return (
      <>
         <Header title="회원가입" />
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
