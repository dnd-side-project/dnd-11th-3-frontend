import { useForm, UseFormReturn } from 'react-hook-form'

export type QuestionFormValues = {
   title: string
   content: string
   jobCategory: null | { label: string; id: string }
   reward: number
}

export const useQuestionForm = (
   defaultValues: QuestionFormValues,
): UseFormReturn<QuestionFormValues> => {
   const form = useForm({
      mode: 'onTouched',
      defaultValues,
   })
   return form as UseFormReturn<QuestionFormValues>
}
