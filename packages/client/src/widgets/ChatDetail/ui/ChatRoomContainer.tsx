import { IMessage } from '@features/chat/lib/useWebSocketConnection'
import SendMessage from './SendMessage'
import { sendContainer } from './style.css'
import ReceiveMessageContainer from './ReceiveMessageContainer'

interface Props {
   messageList: IMessage[]
   userId?: number
}

function ChatRoomContainer({ messageList, userId }: Props) {
   return (
      <div className={sendContainer}>
         {messageList.map((item) => {
            return userId === item.senderId ? (
               <SendMessage content={item.content} />
            ) : (
               <ReceiveMessageContainer content={item.content} />
            )
         })}
      </div>
   )
}

export default ChatRoomContainer