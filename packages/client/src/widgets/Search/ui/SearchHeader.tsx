import { TextInput } from '@gds/component'
import { IconArrowLeft, IconSearch } from '@gds/icon'
import { useRouter } from 'next/navigation'
import * as styles from './style.css'

interface Prop {
   input: string
   setSearchInput: (input: string) => void
}

export function SearchHeader({ input, setSearchInput }: Prop) {
   const router = useRouter()

   const handleOnChangeSearchInputInput = (
      event: React.ChangeEvent<HTMLInputElement>,
   ) => {
      setSearchInput(event.target.value)
   }

   const handleOnKeyDownEnter = (
      event: React.KeyboardEvent<HTMLInputElement>,
   ) => {
      if (event.key === 'Enter') {
         router.push(`/search/${input}`)
      }
   }

   return (
      <div className={styles.Container}>
         <div className={styles.IconBox}>
            <IconArrowLeft onClick={() => router.back()} size={30} />
         </div>
         <div className={styles.SearchBox}>
            <TextInput
               value={input}
               onKeyDown={handleOnKeyDownEnter}
               onChange={handleOnChangeSearchInputInput}
               placeholder="검색어를 입력해주세요"
               icon={<IconSearch size={25} />}
               style={{ width: '259px' }}
            />
         </div>
      </div>
   )
}
