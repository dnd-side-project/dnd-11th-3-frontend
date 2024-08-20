'use client'

import { SignupFormValues } from '@entities/signup'
import { Select } from '@gds/component'
import { IconSearch } from '@gds/icon'
import { JOB_CATEGORIES } from '@shared/model'
import { LabeledInputWithButton, UnlabeledInputWithButton } from '@shared/ui'
import { Controller, set, UseFormReturn } from 'react-hook-form'
import { useState } from 'react'
import {
   useSendVerificationCodeByEmail,
   useVerifyCode,
} from 'src/clientPages/signup/api/mail'
import { on } from 'events'
import * as styles from './style.css'

interface Props {
   form: UseFormReturn<SignupFormValues>
}

export function SignupInputSection({ form }: Props) {
   const [loading, setLoading] = useState(false)
   const {
      officialEmailVerifyCodeSent,
      // nicknameErrorMessage,
      // officialEmailVerifyCodeErrorMessage,
   } = form.watch()

   const { mutate: sendVerifyCodeByEmail } = useSendVerificationCodeByEmail()
   const { mutate: verifyCode } = useVerifyCode()

   return (
      <>
         <Controller
            name="officialEmail"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <LabeledInputWithButton
                  inputProps={{
                     label: '공무원 이메일 인증',
                     required: true,
                     width: 292,
                     onChange: (e) => {
                        if (error) {
                           form.clearErrors('officialEmail')
                        }
                        onChange(e.target.value)
                     },
                     description: '버튼 클릭시 이메일로 인증번호가 전송됩니다.',
                     errorMessage:
                        error?.type === 'server' ? error.message : '',
                  }}
                  buttonProps={{
                     variant: 'filled',
                     width: 58,
                     onClick: async () => {
                        setLoading(true)
                        form.setValue('officialEmailVerifyCodeSent', true)
                        form.clearErrors('officialEmail')
                        sendVerifyCodeByEmail(
                           {
                              targetEmail: value,
                           },
                           {
                              onSuccess: () => {
                                 // TODO: '성공했습니다 메세지 띄우기'
                                 setLoading(false)
                                 form.setValue(
                                    'officialEmailVerifyCodeSent',
                                    false,
                                 )
                              },
                              onError: () => {
                                 setLoading(false)
                                 form.setValue(
                                    'officialEmailVerifyCodeSent',
                                    false,
                                 )
                                 form.setError('officialEmail', {
                                    message:
                                       '이메일 전송을 실패했습니다. 다시 시도해주세요',
                                    type: 'server',
                                 })
                              },
                           },
                        )
                     },
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <UnlabeledInputWithButton
                  inputProps={{
                     width: 292,
                     placeholder: '인증번호를 입력해주세요',
                     errorMessage:
                        error?.type === 'verification' ? error.message : '',
                  }}
                  buttonProps={{
                     width: 58,
                     variant: 'filled',
                     disabled: !officialEmailVerifyCodeSent,
                     loading,
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
                        minLength: 2,
                        maxLength: 12,
                        width: 264,
                        label: '닉네임',
                        description: '2-12자 이내로 입력해주세요.',
                        required: true,
                        onChange,
                        value,
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
                     selected={value}
                     variant="default"
                     onSelect={(item) => onChange(item)}
                  />
               )}
            />

            {/* <Controller
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
            /> */}
         </div>
      </>
   )
}
