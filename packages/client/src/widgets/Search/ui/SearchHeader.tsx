import { TextInput } from '@gds/component'
import { IconArrowLeft, IconSearch } from '@gds/icon'
import * as styles from './style.css'

export function SearchHeader() {
   return (
      <div className={styles.Container}>
         <div className={styles.IconBox}>
            <IconArrowLeft size={30} />
         </div>
         <div className={styles.SearchBox}>
            <TextInput
               placeholder="검색어를 입력해주세요"
               icon={<IconSearch size={25} />}
               style={{ width: '259px' }}
            />
         </div>
      </div>
   )
}
