'use client'

import { useCreateQuestionForm } from '@entities/question'
import { QuestionCreateInputs } from '@widgets/QuestionCreateInputs'

export function ClientQuestionCreatePage() {
   const form = useCreateQuestionForm()
   // api 연동시 onSubmit 함수 구현

   return (
      <QuestionCreateInputs
         form={form}
         onSubmit={() => alert('TODO: submit')}
      />
   )
}
