import {
   QuestionInformationContainer,
   AnswerContainer,
} from '@widgets/QuestionDetail'
import { pageWrapper } from './style.css'

export default function QuestionDetailPage() {
   return (
      <div className={pageWrapper}>
         <QuestionInformationContainer />
         <AnswerContainer />
      </div>
   )
}
