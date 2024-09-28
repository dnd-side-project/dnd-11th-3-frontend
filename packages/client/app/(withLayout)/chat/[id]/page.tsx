import { ClientChatDetailPage } from 'src/clientPages/chatDetail'

function ChatDetailPage({ params }: { params: { id: string } }) {
   return <ClientChatDetailPage chatRoomId={Number(params.id)} />
}

export default ChatDetailPage