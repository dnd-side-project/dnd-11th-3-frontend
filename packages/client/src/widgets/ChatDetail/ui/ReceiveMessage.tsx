import { messageBox, timeTxt } from './style.css'

function ReceiveMessage() {
   return (
      <>
         <div className={messageBox({ type: 'receive' })}>받은메세지</div>{' '}
         <div>
            <div className={timeTxt}>16:20</div>
         </div>
      </>
   )
}

export default ReceiveMessage
