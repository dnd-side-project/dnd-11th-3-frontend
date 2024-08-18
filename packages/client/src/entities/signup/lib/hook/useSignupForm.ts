import { off } from 'process'
import { useForm, UseFormReturn } from 'react-hook-form'

export type SignupFormValues = {
   officialEmail: string
   verificationNumber: string
   nickname: string
   jobGroup: null | { label: string; id: string }
   jobCategory: null | { label: string; id: string }
   officialEmailVerified: boolean
   nicknameVerified: boolean
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
         nicknameVerified: false,
      },
   })
   return form as UseFormReturn<SignupFormValues>
}
