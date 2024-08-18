'use client'

import {
   useQuestionForm,
   QUSETION_FORM_DEFAULT_VALUES,
} from '@entities/question'

import { QuestionUpdateInputs } from '@widgets/QuestionUpdateInputs'

export function ClientQuestionUpdatePage() {
   const form = useQuestionForm(QUSETION_FORM_DEFAULT_VALUES)
   // api 연동시 onSubmit 함수 구현

   return (
      <QuestionUpdateInputs
         form={form}
         onSubmit={() => alert('TODO: submit')}
      />
   )
}
