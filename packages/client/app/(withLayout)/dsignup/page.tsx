'use client'

import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { SignUpType } from '@entities/@types/signup'
import { color } from '@gds/token'
import { Button, TextInput } from '@gds/component'
import {
   handleOnClickCheckAuthCode,
   handleOnClickCheckMail,
   handleOnClickCheckNickname,
   handleOnClickSignUp,
} from '@shared/model/signup/handleOnClick'
import { useQuery } from '@tanstack/react-query'
import * as styles from './index.css'

export type EssentialDataType = SignUpType & {
   authState: 'before' | 'available' | 'error'
   nicknameState: 'before' | 'available' | 'duplicated'
   emailState: 'before' | 'available' | 'duplicated'
   authCode: string
}

export default function DSignup() {
   const { control, handleSubmit, watch, setValue, getValues } =
      useForm<EssentialDataType>({
         defaultValues: {
            officialEmail: '',
            nickname: '',
            jobGroup: '',
            jobCategory: '',
            authState: 'before',
            nicknameState: 'before',
            emailState: 'before',
            authCode: '',
         },
         mode: 'onChange',
      })

   const officialEmail = watch('officialEmail')
   const emailState = watch('emailState')
   const nickname = watch('nickname')
   const authCode = watch('authCode')
   const authState = watch('authState')
   const nicknameState = watch('nicknameState')
   const jobGroup = watch('jobGroup')
   const jobCategory = watch('jobCategory')

   const { data: isFormComplete } = useQuery({
      queryKey: [
         'formComplete',
         emailState,
         nickname,
         jobGroup,
         jobCategory,
         authState,
         nicknameState,
      ],
      queryFn: () => {
         return (
            emailState === 'available' &&
            nickname.length > 0 &&
            jobGroup.length > 0 &&
            jobCategory.length > 0 &&
            authState === 'available' &&
            nicknameState === 'available'
         )
      },
      enabled: true,
      refetchOnWindowFocus: false,
   })

   const onSubmit = (data: EssentialDataType) => {
      if (isFormComplete) {
         handleOnClickSignUp(data)
      }
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.Wrapper}>
         <div className={styles.InputBtnWrapper}>
            <Controller
               name="officialEmail"
               control={control}
               rules={{ required: true }}
               render={({ field }) => (
                  <TextInput
                     label={
                        <>
                           공무원 이메일 인증
                           <span style={{ color: color.error }}>*</span>
                        </>
                     }
                     errorMessage={
                        emailState === 'duplicated'
                           ? '이미 가입된 이메일입니다.'
                           : ''
                     }
                     {...field}
                  />
               )}
            />
            <div className={styles.ButtonStyle} style={{ marginTop: '36px' }}>
               <Button
                  style={{ height: '54px' }}
                  size="small"
                  variant={officialEmail.length > 0 ? 'filled' : 'outlined'}
                  disabled={officialEmail.length === 0}
                  onClick={() => {
                     handleOnClickCheckMail(officialEmail, (newEmailState) =>
                        setValue('emailState', newEmailState),
                     )
                  }}
                  type="button"
               >
                  인증
               </Button>
            </div>
         </div>
         <div className={styles.InputBtnWrapper}>
            <Controller
               name="authCode"
               control={control}
               rules={{ required: true }}
               render={({ field }) => (
                  <TextInput
                     description={
                        authState === 'before'
                           ? ''
                           : authState === 'available'
                             ? ' 공무원 인증이 완료되었습니다.'
                             : ''
                     }
                     errorMessage={
                        authState === 'error'
                           ? '인증번호를 다시 확인해주세요.'
                           : ''
                     }
                     placeholder="인증번호 n자리를 입력해주세요"
                     disabled={officialEmail.length === 0}
                     {...field}
                  />
               )}
            />
            <div className={styles.ButtonStyle}>
               <Button
                  style={{ height: '54px' }}
                  size="small"
                  variant={authCode.length > 0 ? 'filled' : 'outlined'}
                  disabled={authCode.length === 0}
                  onClick={() =>
                     handleOnClickCheckAuthCode(
                        officialEmail,
                        authCode,
                        (newAuthState) => setValue('authState', newAuthState),
                     )
                  }
                  type="button"
               >
                  확인
               </Button>
            </div>
         </div>
         <span className={styles.Title} />
         <div className={styles.InputBtnWrapper}>
            <Controller
               name="nickname"
               control={control}
               rules={{ required: true }}
               render={({ field }) => (
                  <TextInput
                     label={
                        <>
                           닉네임<span style={{ color: color.error }}>*</span>
                        </>
                     }
                     description={
                        nicknameState === 'before'
                           ? '2 - 12자 이내로 입력하세요'
                           : nicknameState === 'available'
                             ? '사용가능한 닉네임 입니다.'
                             : ''
                     }
                     errorMessage={
                        nicknameState === 'duplicated'
                           ? '이미 존재하는 닉네임 입니다.'
                           : ''
                     }
                     placeholder="닉네임을 입력해주세요"
                     {...field}
                  />
               )}
            />
            <div className={styles.DuplicatedBtnStyle}>
               <Button
                  style={{ height: '54px' }}
                  size="small"
                  variant={nickname.length > 0 ? 'filled' : 'outlined'}
                  disabled={nickname.length < 3}
                  onClick={() =>
                     handleOnClickCheckNickname(nickname, (newNicknameState) =>
                        setValue('nicknameState', newNicknameState),
                     )
                  }
                  type="button"
               >
                  중복확인
               </Button>
            </div>
         </div>
         <div
            className={styles.InputBtnWrapper}
            style={{ flexDirection: 'column' }}
         >
            <span className={styles.Title}>
               직군<span style={{ color: color.error }}>*</span>
            </span>
            <Controller
               name="jobGroup"
               control={control}
               rules={{ required: true }}
               render={({ field }) => <input {...field} />}
            />
         </div>
         <span className={styles.Title}>
            직렬<span style={{ color: color.error }}>*</span>
         </span>
         <Controller
            name="jobCategory"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
         />
         <div className={styles.FinalBtnBox}>
            <Button
               type="submit"
               size="medium"
               variant="filled"
               disabled={!isFormComplete}
            >
               가입하기
            </Button>
         </div>
      </form>
   )
}
