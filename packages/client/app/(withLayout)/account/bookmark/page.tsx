import { data } from 'src/clientPages/home/ui/ClientHomePage'
import AccountBookmarkClient from '@widgets/accountBookmark/ui'
import * as styles from '../index.css'

function AccountBookmark() {
   return (
      <div className={styles.Wrapper}>
         <AccountBookmarkClient QuestionData={data} />
      </div>
   )
}

export default AccountBookmark
