'use client'

import {
   useQuestionForm,
   QUSETION_FORM_DEFAULT_VALUES,
} from '@entities/question'
import { QuestionCreateInputs } from '@widgets/QuestionCreateInputs'
import { MainLoader } from '@shared/ui'
import { usePostQuestion } from '../api/auth'

export function ClientQuestionCreatePage() {
   const form = useQuestionForm(QUSETION_FORM_DEFAULT_VALUES)
   // api 연동시 onSubmit 함수 구현
   const { mutate } = usePostQuestion()

   return (
      <>
         <MainLoader height={915} loading={false} />
         <QuestionCreateInputs
            form={form}
            onSubmit={() => alert('TODO: submit')}
         />
      </>
   )
}
