import { Divider } from '@gds/component'
import CreditListsWrapper from './CreditListsWrapper'
import CreditAmount from './CreditAmount'
import { Wrapper } from './style.css'

export function CreditHistoryWidget() {
   return (
      <div className={Wrapper}>
         <CreditAmount />
         <Divider />
         <CreditListsWrapper />
      </div>
   )
}
