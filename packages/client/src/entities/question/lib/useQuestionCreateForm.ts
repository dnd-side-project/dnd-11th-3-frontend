import { useForm, UseFormReturn } from 'react-hook-form'

export type QuestionFormValues = {
   title: string
   content: string
   jobCategory: null | { label: string; id: string }
   reward: number
}

export const useCreateQuestionForm = (): UseFormReturn<QuestionFormValues> => {
   const form = useForm({
      mode: 'onTouched',
      defaultValues: {
         title: '',
         content: '',
         jobCategory: null,
         reward: 1000,
      },
   })
   return form as UseFormReturn<QuestionFormValues>
}
