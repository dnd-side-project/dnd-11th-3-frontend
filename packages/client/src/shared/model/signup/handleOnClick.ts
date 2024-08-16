import { postMail, postAuthCode } from '@features/signup/CheckMail'
import { EssentialDataType } from '@entities/@types'
import { postCheckNickname, postMemberInfo } from '@features/signup/Member'

export const handleOnClickCheckMail = (officialEmail: string) => {
   if (officialEmail.length > 0) {
      postMail(officialEmail)
   }
}

export const handleOnClickCheckAuthCode = (
   officialEmail: string,
   authCode: string,
   setIsAuth: (isAuth: boolean) => void,
) => {
   if (authCode.length > 0) {
      postAuthCode(officialEmail, authCode).then((res) => {
         setIsAuth(res?.data.result)
      })
   }
}

export const handleOnClickCheckNickname = (
   nickname: string,
   setIsDuplicated: (isDuplicated: boolean) => void,
) => {
   if (nickname.length > 0) {
      postCheckNickname(nickname).then((res) => {
         setIsDuplicated(!res?.data.result)
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
