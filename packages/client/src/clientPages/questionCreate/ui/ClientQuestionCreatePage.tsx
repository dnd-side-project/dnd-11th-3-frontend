'use client'

import {
   useQuestionForm,
   QUSETION_FORM_DEFAULT_VALUES,
} from '@entities/question'
import { QuestionCreateInputs } from '@widgets/QuestionCreateInputs'

export function ClientQuestionCreatePage() {
   const form = useQuestionForm(QUSETION_FORM_DEFAULT_VALUES)
   // api 연동시 onSubmit 함수 구현

   return (
      <QuestionCreateInputs
         form={form}
         onSubmit={() => alert('TODO: submit')}
      />
   )
}
