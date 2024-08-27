import { fetchMemberInformation, ssrConfig } from '@shared/api'
import { QueryClient } from '@tanstack/react-query'
import { ClientQuestionDetailPage } from 'src/clientPages/questionDetail'

export default async function QuestionDetailPage(d) {
   console.log(d)
   // console.log(userData)
   const queryClient = new QueryClient()
   const config = ssrConfig()

   try {
      // SOP 정책 해결 필요
      const user = await queryClient.fetchQuery({
         queryKey: [`/members/information`],
         queryFn: () => fetchMemberInformation(config),
      })
      console.log(user)
   } catch (e) {
      console.log(e)
   }
   return <ClientQuestionDetailPage />
}
