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

export function ClientSignupPage() {
   const form = useSignupForm()

   return (
      <>
         <Header title="회원가입" />
         <div className={styles.Wrapper}>
            <SignupInputSection form={form} />

            <div className={styles.FinalBtnBox}>
               <Button type="button" size="medium" variant="filled">
                  가입하기
               </Button>
            </div>
         </div>
      </>
   )
}
