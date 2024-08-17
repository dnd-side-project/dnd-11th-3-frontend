import { useForm } from 'react-hook-form'

export type QuestionFormValues = {
   title: string
   content: string
   jobCategory: { label: string; key: string } | null
   reward: number
}

export const useCreateQuestionForm = () => {
   const form = useForm({
      mode: 'onTouched',
      defaultValues: {
         title: '',
         content: '',
         jobCategory: null,
         reward: 1000,
      },
   })
}
