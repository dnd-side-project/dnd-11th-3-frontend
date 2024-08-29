import { fetchMemberInformation, ssrConfig } from '@shared/api'
import { QueryClient } from '@tanstack/react-query'
import { cookies } from 'next/headers'
import { ClientQuestionDetailPage } from 'src/clientPages/questionDetail'

export default async function QuestionDetailPage(d) {
   const queryClient = new QueryClient()
   const config = ssrConfig()

   try {
      const user = await queryClient.fetchQuery({
         queryKey: [`/members/information`],
         queryFn: () => fetchMemberInformation(config),
      })
   } catch (e) {
      console.log(e)
   }
   // TODO: give userData by props to ClientQuestionDetailPage
   return <ClientQuestionDetailPage />
}
