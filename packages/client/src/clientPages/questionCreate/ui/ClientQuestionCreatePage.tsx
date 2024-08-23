'use client'

import {
   useQuestionForm,
   QUSETION_FORM_DEFAULT_VALUES,
} from '@entities/question'
import { QuestionCreateInputs } from '@widgets/QuestionCreateInputs'
import { MainLoader } from '@shared/ui'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePostQuestion } from '../api/auth'

export function ClientQuestionCreatePage() {
   const router = useRouter()
   const form = useQuestionForm(QUSETION_FORM_DEFAULT_VALUES)

   const { mutate: createQuestion, status } = usePostQuestion()
   const [imageUrls, setImageUrls] = useState<string[]>([])

   return (
      <>
         <MainLoader height={915} loading={status === 'pending'} />
         <QuestionCreateInputs
            form={form}
            onSubmit={() => {
               const value = form.getValues()
               createQuestion(
                  {
                     title: value.title,
                     content: value.content,
                     imageUrls,
                     targetJobGroup: String(value.targetJobGroup?.id),
                     reward: value.reward,
                  },
                  {
                     onSuccess: () => {
                        form.reset()
                        setImageUrls([])
                        router.push('/home')
                     },
                  },
               )
            }}
         />
      </>
   )
}
