import { postMail, postAuthCode } from '@features/signup/CheckMail'
import { EssentialDataType } from '@entities/@types'
import { postCheckNickname, postMemberInfo } from '@features/signup/Member'

export const handleOnClickCheckMail = (
   officialEmail: string,
   setEmailState: (emailState: 'before' | 'available' | 'duplicated') => void,
) => {
   if (officialEmail.length > 0) {
      postMail(officialEmail, setEmailState)
   }
}

export const handleOnClickCheckAuthCode = (
   officialEmail: string,
   authCode: string,
   setAuthState: (authState: 'before' | 'available' | 'error') => void,
) => {
   if (authCode.length > 0) {
      if (
         postAuthCode(officialEmail, authCode).then((res) => {
            if (res?.data.result) {
               setAuthState('available')
            } else {
               setAuthState('error')
            }
         })
      ) {
         setAuthState('error')
      }
   }
}

export const handleOnClickCheckNickname = (
   nickname: string,
   setNickNameState: (
      nicknameState: 'before' | 'available' | 'duplicated',
   ) => void,
) => {
   if (nickname.length > 0) {
      postCheckNickname(nickname).then((res) => {
         const isDuplicated = res?.data.isDuplicated
         if (isDuplicated) {
            setNickNameState('duplicated')
         } else {
            setNickNameState('available')
         }
      })
   }
}

export const handleOnClickSignUp = (essentialData: EssentialDataType) => {
   postMemberInfo(
      essentialData.officialEmail,
      essentialData.nickname,
      essentialData.jobGroup,
      essentialData.jobCategory,
   )
}
