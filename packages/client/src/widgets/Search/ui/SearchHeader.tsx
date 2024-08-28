import { TextInput } from '@gds/component'
import { IconArrowLeft, IconSearch } from '@gds/icon'
import { useRouter } from 'next/navigation'
import * as styles from './style.css'

interface Prop {
   input: string
}

export function SearchHeader({ input }: Prop) {
   const router = useRouter()

   return (
      <div className={styles.Container}>
         <div className={styles.IconBox}>
            <IconArrowLeft onClick={() => router.back()} size={30} />
         </div>
         <div className={styles.SearchBox}>
            <TextInput
               value={input}
               placeholder="검색어를 입력해주세요"
               icon={<IconSearch size={25} />}
               style={{ width: '259px' }}
            />
         </div>
      </div>
   )
}
