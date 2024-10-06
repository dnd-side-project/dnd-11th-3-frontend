import { messageBox, timeTxt } from './style.css'

interface Props {
   content?: string
   time?: string
}

function ReceiveMessage({ content, time }: Props) {
   return (
      <>
         <div className={messageBox({ type: 'receive' })}>
            <span>{content}</span>
         </div>
         <div>
            <div className={timeTxt}>{time?.slice(11, 16)}</div>
         </div>
      </>
   )
}

export default ReceiveMessage
