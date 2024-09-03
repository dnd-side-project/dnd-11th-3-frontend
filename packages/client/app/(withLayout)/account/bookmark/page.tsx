'use client'

import AccountBookmarkClient from '@widgets/accountBookmark/ui'
import { useGetScrapQuestions } from 'src/clientPages/accountQuestion/api/questionPosts'
import { useRouter } from 'next/navigation'
import * as styles from '../index.css'

function AccountBookmark() {
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
      <div className={styles.Wrapper}>
         <AccountBookmarkClient QuestionData={scrapQuestionsData?.content} />
      </div>
   )
}

export default AccountBookmark
