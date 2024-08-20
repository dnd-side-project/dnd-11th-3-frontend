import { useForm, UseFormReturn } from 'react-hook-form'

export type SignupFormValues = {
   officialEmail: string
   verificationNumber: string
   nickname: string
   jobGroup: null | { label: string; id: string }
   jobCategory: null | { label: string; id: string }
   officialEmailVerified: boolean
   officialEmailVerifyCodeSent: boolean
   nicknameVerified: boolean
   // officialEmailVerifyCodeErrorMessage?: string
   // nicknameErrorMessage?: string
}

export const useSignupForm = (): UseFormReturn<SignupFormValues> => {
   const form = useForm({
      mode: 'onTouched',
      defaultValues: {
         officialEmail: '',
         verificationNumber: '',
         nickname: '',
         jobGroup: null,
         jobCategory: null,
         officialEmailVerified: false,
         officialEmailVerifyCodeSent: false,
         nicknameVerified: false,
      },
   })
   return form as UseFormReturn<SignupFormValues>
}
