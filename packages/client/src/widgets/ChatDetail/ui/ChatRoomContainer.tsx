import { ChatMessageResponse } from '@server-api/api'
import SendMessage from './SendMessage'
import { sendContainer } from './style.css'
import ReceiveMessageContainer from './ReceiveMessageContainer'

interface Props {
   messageList?: ChatMessageResponse[]
   userId?: number
}

function ChatRoomContainer({ messageList, userId }: Props) {
   return (
      <div className={sendContainer}>
         {messageList?.map((item) => {
            return userId === item.senderId ? (
               <SendMessage content={item.content} time={item.createdAt} />
            ) : (
               <ReceiveMessageContainer
                  content={item.content}
                  time={item.createdAt}
               />
            )
         })}
      </div>
   )
}

export default ChatRoomContainer
