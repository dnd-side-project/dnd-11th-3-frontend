import SendMessage from './SendMessage'
import { sendContainer } from './style.css'
import ReceiveMessageContainer from './ReceiveMessageContainer'

function ChatRoomContainer() {
   return (
      <div className={sendContainer}>
         <SendMessage />
         <ReceiveMessageContainer />
      </div>
   )
}

export default ChatRoomContainer
