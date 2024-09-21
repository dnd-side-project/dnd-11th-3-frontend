import { useForm, UseFormReturn } from 'react-hook-form'

export type ProfileUpdateFormValues = {
   nickname: string
   jobGroup: null | { label: string; id: string }
   jobCategory: null | { label: string; id: string }
}

export const useProfileUpdateForm =
   (): UseFormReturn<ProfileUpdateFormValues> => {
      const form = useForm({
         mode: 'onTouched',
         defaultValues: {
            nickname: '',
            jobGroup: null,
            jobCategory: null,
         },
      })
      return form as UseFormReturn<ProfileUpdateFormValues>
   }
