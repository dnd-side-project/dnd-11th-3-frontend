import { Divider } from '@gds/component'
import CreditListsContainer from './CreditListsContainer'
import CreditAmount from './CreditAmount'
import { Wrapper } from './style.css'

export function CreditHistoryContainer() {
   return (
      <div className={Wrapper}>
         <CreditAmount />
         <Divider />
         <CreditListsContainer />
      </div>
   )
}
