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
      !!jobCategory?.id &&
      !!jobCategory?.label &&
      typeof jobCategory?.id === 'string' &&
      typeof jobCategory?.label === 'string'
   const isRewardValid = !!reward && reward >= 1000 && reward <= 100000

   const getTitleErrorMessage = () => {
      if (!isTitleValid) {
         return '제목은 1자 이상 20자 이하로 작성해주세요'
      }
      return ''
   }
   const getContentErrorMessage = () => {
      if (!isContentValid) {
         return '내용은 1자 이상 500자 이하로 작성해주세요'
      }
      return ''
   }
   const getJobCategoryErrorMessage = () => {
      if (!isCategoryValid) {
         return '직군을 선택해주세요'
      }
      return ''
   }
   const getRewardErrorMessage = () => {
      if (!isRewardValid) {
         return '보상은 1,000원 이상 10,000원 이하로 설정해주세요'
      }
      return ''
   }

   return {
      getTitleErrorMessage,
      getContentErrorMessage,
      getJobCategoryErrorMessage,
      getRewardErrorMessage,
      canSubmit:
         isTitleValid && isContentValid && isCategoryValid && isRewardValid,
   }
}
