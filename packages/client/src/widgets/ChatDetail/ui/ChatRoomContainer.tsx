import SendMessage from './SendMessage'
import ReceiveMessage from './ReceiveMessage'
import { sendContainer } from './style.css'

function ChatRoomContainer() {
   return (
      <div className={sendContainer}>
         <SendMessage />
         <ReceiveMessage />
      </div>
   )
}

export default ChatRoomContainer
