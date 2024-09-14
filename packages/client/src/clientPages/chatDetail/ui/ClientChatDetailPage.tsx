import { ChatHeader } from '@widgets/ChatDetail'
import QuestionDetailContainer from '@widgets/ChatDetail/ui/QuestionDetailContainer'

export function ClientChatDetailPage() {
   return (
      <div style={{ margin: '0 16px' }}>
         <ChatHeader title="채팅닉네임" />
         <QuestionDetailContainer
            jobGroup="법원경비관리"
            title="서류처리방식질문"
         />
      </div>
   )
}
