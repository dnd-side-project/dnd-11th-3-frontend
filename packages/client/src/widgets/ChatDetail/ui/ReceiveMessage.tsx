import { messageBox } from './style.css'

function ReceiveMessage() {
   return <div className={messageBox({ type: 'receive' })}>받은메세지</div>
}

export default ReceiveMessage
