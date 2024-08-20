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
import { usePostNicknameDuplCheck } from '@shared/api'
import * as styles from './style.css'

interface Props {
   form: UseFormReturn<SignupFormValues>
}

export function SignupInputSection({ form }: Props) {
   const [loading, setLoading] = useState(false)
   const {
      officialEmail,
      officialEmailVerifyCodeSent,
      // nicknameErrorMessage,
      // officialEmailVerifyCodeErrorMessage,
   } = form.watch()

   const { mutate: sendVerifyCodeByEmail } = useSendVerificationCodeByEmail()
   const { mutate: verifyCode } = useVerifyCode()
   const { mutate: checkNickNameDuplication } = usePostNicknameDuplCheck()

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
                     placeholder: '공무원 공식 메일을 입력해주세요.',
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
                                 setLoading(false)
                                 form.clearErrors('officialEmail')
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
                     onChange: (e) => {
                        if (error) {
                           form.clearErrors('verificationNumber')
                        }
                        onChange(e.target.value)
                     },
                     width: 292,
                     placeholder: '인증번호를 입력해주세요',
                     errorMessage:
                        error?.type === 'verification' ? error.message : '',
                  }}
                  buttonProps={{
                     width: 58,
                     variant: 'filled',
                     disabled: !officialEmailVerifyCodeSent || !value,
                     loading,
                     onClick: () => {
                        verifyCode(
                           {
                              targetEmail: officialEmail,
                              authCode: value,
                           },
                           {
                              onSuccess: () => {
                                 // TODO: '성공했습니다 메세지 띄우기'
                                 form.clearErrors('verificationNumber')
                                 form.setValue('officialEmailVerified', true)
                              },
                              onError: () => {
                                 form.setError('verificationNumber', {
                                    message:
                                       '서버 에러가 발생했습니다. 다시 시도해주세요.',
                                    type: 'server',
                                 })
                                 form.setError('verificationNumber', {
                                    message: '인증번호가 일치하지 않습니다.',
                                    type: 'verification',
                                 })
                              },
                           },
                        )
                     },
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
               render={({
                  field: { onChange, value },
                  fieldState: { error },
               }) => (
                  <LabeledInputWithButton
                     inputProps={{
                        minLength: 2,
                        maxLength: 12,
                        width: 264,
                        label: '닉네임',
                        description: '2-12자 이내로 입력해주세요.',
                        required: true,
                        onChange: (e) => {
                           if (error) {
                              form.clearErrors('nickname')
                           }
                           onChange(e.target.value)
                        },
                        value,
                        errorMessage:
                           error?.type === 'server'
                              ? error.message
                              : error?.type === 'validation'
                                ? error.message
                                : '',
                     }}
                     buttonProps={{
                        width: 86,
                        variant: 'filled',
                        disabled: value.length < 2,
                        onClick: () => {
                           checkNickNameDuplication(
                              {
                                 nickname: value,
                              },
                              {
                                 onSuccess: () => {
                                    form.clearErrors('nickname')
                                    form.setValue('nicknameVerified', true)
                                 },
                                 onError: () => {
                                    form.setError('nickname', {
                                       message:
                                          '서버 에러가 발생했습니다. 다시 시도해주세요.',
                                       type: 'server',
                                    })

                                    // form.setError('nickname', { //TODO: 서버에서 에러메세지 받아오기
                                    //    message: '이미 사용중인 닉네임입니다.',
                                    //    type: 'validation',
                                    // })
                                 },
                              },
                           )
                        },
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
                     required
                     items={JOB_CATEGORIES.map((category) => ({
                        label: category,
                        id: category,
                     }))}
                     inputProps={{
                        placeholder: '해당 직군을 선택해주세요',
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
         </div>
      </>
   )
}
