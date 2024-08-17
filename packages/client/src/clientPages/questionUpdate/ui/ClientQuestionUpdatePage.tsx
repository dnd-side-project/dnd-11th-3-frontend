'use client'

import { useCreateQuestionForm } from '@entities/question'

import { QuestionUpdateInputs } from '@widgets/QuestionUpdateInputs'

export function ClientQuestionUpdatePage() {
   const form = useCreateQuestionForm()
   // api 연동시 onSubmit 함수 구현

   return (
      <QuestionUpdateInputs
         form={form}
         onSubmit={() => alert('TODO: submit')}
      />
   )
}
