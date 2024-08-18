import { postMail, postAuthCode } from '@features/signup/CheckMail'
import { postCheckNickname, postMemberInfo } from '@features/signup/Member'
import { EssentialDataType } from 'app/(withLayout)/dsignup/page'

export const handleOnClickCheckMail = (
   officialEmail: string,
   setEmailState: (emailState: 'before' | 'available' | 'duplicated') => void,
) => {
   if (officialEmail.length > 0) {
      postMail(officialEmail, setEmailState)
   }
}

export const handleOnClickCheckAuthCode = async (
   officialEmail: string,
   authCode: string,
   setAuthState: (authState: 'before' | 'available' | 'error') => void,
) => {
   if (authCode.length > 0) {
      try {
         const res = await postAuthCode(officialEmail, authCode)
         if (res && res.result) {
            setAuthState('available')
         } else {
            setAuthState('error')
         }
      } catch (error) {
         setAuthState('error')
         console.log(error)
      }
   } else {
      setAuthState('error')
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
         if (res === false) {
            setNickNameState('before')
         } else {
            const { isDuplicated } = res
            if (isDuplicated) {
               setNickNameState('duplicated')
            } else {
               setNickNameState('available')
            }
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
