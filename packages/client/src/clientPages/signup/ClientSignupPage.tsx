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
import * as styles from './style.css'

export type EssentialDataType = SignUpType & {
   isAuth: boolean
}

export function ClientSignupPage() {
   const [authCode, setAuthCode] = useState<string>('')
   const [essentialData, setEssentialData] = useState<EssentialDataType>({
      officialEmail: '',
      nickname: '',
      jobGroup: '',
      jobCategory: '',
      isAuth: true,
   })

   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setEssentialData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleOnChangeAuthCode = (e: ChangeEvent<HTMLInputElement>) => {
      setAuthCode(e.target.value)
   }

   const isFormComplete =
      essentialData.officialEmail.length > 0 &&
      essentialData.nickname.length > 0 &&
      essentialData.jobGroup.length > 0 &&
      essentialData.jobCategory.length > 0 &&
      essentialData.isAuth

   return (
      <>
         <Header title="회원가입" />
         <div className={styles.Wrapper}>
            <LabeledInputWithButton
               inputProps={{
                  label: '공무원 이메일 인증',
                  required: true,
                  width: 292,
               }}
               buttonProps={{
                  variant: 'filled',
                  width: 58,
               }}
               buttonChildren="인증"
            />
            <UnlabeledInputWithButton
               inputProps={{
                  width: 292,
                  placeholder: '인증번호를 입력해주세요',
                  errorMessage: '인증번호가 일치하지 않습니다.',
               }}
               buttonProps={{
                  width: 58,
                  variant: 'filled',
               }}
               buttonChildren="확인"
            />
            <div className={styles.bottomSection}>
               <LabeledInputWithButton
                  inputProps={{
                     width: 264,
                     label: '닉네임',
                     description: '2-12자 이내로 입력해주세요.',
                     required: true,
                  }}
                  buttonProps={{
                     width: 86,
                     variant: 'filled',
                  }}
                  buttonChildren="중복확인"
               />
               <Select
                  items={JOB_CATEGORIES.map((category) => ({
                     label: category,
                     id: category,
                  }))}
                  inputProps={{
                     placeholder: '해당 직군을 입력해주세요',
                     label: '직군',
                     required: true,
                     icon: <IconSearch />,
                  }}
                  selected={null}
                  variant="default"
                  onSelect={(item) => console.log(item)}
               />
               <Select
                  items={JOB_CATEGORIES.map((category) => ({
                     label: category,
                     id: category,
                  }))}
                  inputProps={{
                     placeholder: '해당 직렬을 입력해주세요',
                     label: '직렬',
                     required: true,
                     icon: <IconSearch />,
                  }}
                  selected={null}
                  variant="default"
                  onSelect={(item) => console.log(item)}
               />
            </div>
            <div className={styles.FinalBtnBox}>
               <Button
                  type="button"
                  size="medium"
                  disabled={!isFormComplete}
                  variant="filled"
               >
                  가입하기
               </Button>
            </div>
         </div>
      </>
   )
}
