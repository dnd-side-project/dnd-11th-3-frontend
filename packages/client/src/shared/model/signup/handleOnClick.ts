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
   setEssentialData: React.Dispatch<React.SetStateAction<EssentialDataType>>,
) => {
   if (authCode.length > 0) {
      postAuthCode(officialEmail, authCode).then((res) => {
         setEssentialData((prev) => ({
            ...prev,
            isAuth: res?.data.result,
         }))
      })
   }
}

export const handleOnClickCheckNickname = (
   nickname: string,
   setEssentialData: React.Dispatch<React.SetStateAction<EssentialDataType>>,
) => {
   if (nickname.length > 0) {
      postCheckNickname(nickname).then((res) => {
         if (!res?.data.result) {
            setEssentialData((prev) => ({
               ...prev,
               isDuplicated: false,
            }))
         }
      })
   }
}

export const handleOnClickSignUp = (essentialData: EssentialDataType) => {
   if (
      essentialData.officialEmail.length > 0 &&
      essentialData.nickname.length > 0 &&
      essentialData.jobGroup.length > 0 &&
      essentialData.jobCategory.length > 0 &&
      essentialData.isAuth &&
      !essentialData.isDuplicated
   ) {
      postMemberInfo(
         essentialData.officialEmail,
         essentialData.nickname,
         essentialData.jobGroup,
         essentialData.jobCategory,
      )
   }
}
