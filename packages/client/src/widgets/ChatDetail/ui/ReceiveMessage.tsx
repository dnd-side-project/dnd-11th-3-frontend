import { messageBox, timeTxt } from './style.css'

interface Props {
   content?: string
}

function ReceiveMessage({ content }: Props) {
   return (
      <>
         <div className={messageBox({ type: 'receive' })}>
            <span>{content}</span>
         </div>
         <div>
            <div className={timeTxt}>16:20</div>
         </div>
      </>
   )
}

export default ReceiveMessage
