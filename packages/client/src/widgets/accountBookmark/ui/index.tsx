import Question from '@shared/ui/QuestionList/Question'
import { QuestionPostSimpleResponse } from '@server-api/api'
import { ListWrapper } from './index.css'

interface Prop {
   QuestionData: QuestionPostSimpleResponse[]
}

function AccountBookmarkClient({ QuestionData }: Prop) {
   return (
      <div className={ListWrapper}>
         {QuestionData.map((question) => (
            <Question key={question.questionPostId} data={question} />
         ))}
      </div>
   )
}

export default AccountBookmarkClient
