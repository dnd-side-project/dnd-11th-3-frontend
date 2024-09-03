'use client'

import Question from '@shared/ui/QuestionList/Question'
import { useRouter } from 'next/navigation'
import { useGetScrapQuestions } from 'src/clientPages/accountScrap/api/accountScrap'
import { ListWrapper, Wrapper } from './index.css'

export function ClientAccountBookmark() {
   const router = useRouter()
   const {
      data: scrapQuestionsData,
      isError: scrapQuestionsDataIsError,
      error: scrapQuestionsDataError,
   } = useGetScrapQuestions({
      pageable: {
         page: 0,
         size: 10,
      },
   })

   if (scrapQuestionsDataIsError) {
      router.push('/home')
      // TODO: toast로 수정 필요
      alert(scrapQuestionsDataError.message || '서버 오류가 발생했습니다.')
   }

   return (
      <div className={Wrapper}>
         <div className={ListWrapper}>
            {scrapQuestionsData?.content?.map((question) => (
               <Question key={question.questionPostId} data={question} />
            ))}
         </div>
      </div>
   )
}
