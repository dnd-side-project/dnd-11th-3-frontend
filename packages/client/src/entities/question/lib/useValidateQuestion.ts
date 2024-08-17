import { UseFormReturn, useWatch } from 'react-hook-form'
import { QuestionFormValues } from './useQuestionCreateForm'

export const useValidateQuestion = (
   form: UseFormReturn<QuestionFormValues>,
) => {
   const { title, content, jobCategory, reward } = useWatch({
      control: form.control,
   })

   const isTitleValid = !!title && title?.length > 0 && title?.length <= 20
   const isContentValid =
      !!content && content?.length > 0 && content?.length <= 500
   const isCategoryValid =
      jobCategory !== null &&
      !!jobCategory?.key &&
      !!jobCategory?.label &&
      typeof jobCategory?.key === 'string' &&
      typeof jobCategory?.label === 'string'
   const isRewardValid = !!reward && reward >= 1000 && reward <= 100000

   return {
      isTitleValid,
      isContentValid,
      isCategoryValid,
      isRewardValid,
      canSubmit:
         isTitleValid && isContentValid && isCategoryValid && isRewardValid,
   }
}
