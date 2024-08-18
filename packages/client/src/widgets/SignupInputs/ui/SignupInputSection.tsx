'use client'

import { SignupFormValues } from '@entities/signup'
import { Select } from '@gds/component'
import { IconSearch } from '@gds/icon'
import { JOB_CATEGORIES } from '@shared/model'
import { LabeledInputWithButton, UnlabeledInputWithButton } from '@shared/ui'
import { Controller, UseFormReturn } from 'react-hook-form'
import * as styles from './style.css'

interface Props {
   form: UseFormReturn<SignupFormValues>
   onSendVerificationCodeByEmail: (email: string) => void
}

export function SignupInputSection({
   form,
   onSendVerificationCodeByEmail,
}: Props) {
   return (
      <>
         <Controller
            name="officialEmail"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <LabeledInputWithButton
                  inputProps={{
                     label: '공무원 이메일 인증',
                     required: true,
                     width: 292,
                     onChange,
                  }}
                  buttonProps={{
                     variant: 'filled',
                     width: 58,
                     onClick: () => onSendVerificationCodeByEmail(value),
                  }}
                  buttonChildren="인증"
               />
            )}
         />
         <Controller
            name="verificationNumber"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
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
            )}
         />

         <div className={styles.bottomSection}>
            <Controller
               name="nickname"
               control={form.control}
               rules={{
                  required: true,
               }}
               render={({ field: { onChange, value } }) => (
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
               )}
            />
            <Controller
               name="jobGroup"
               control={form.control}
               rules={{
                  required: true,
               }}
               render={({ field: { onChange, value } }) => (
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
               )}
            />

            <Controller
               name="jobCategory"
               control={form.control}
               rules={{
                  required: true,
               }}
               render={({ field: { onChange, value } }) => (
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
               )}
            />
         </div>
      </>
   )
}
