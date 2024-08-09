import { useAtom } from 'jotai'
import { headerTitleState } from '../atoms/HeaderTitleState'

const useHeader = () => {
   const [headerTitle, setHeaderTitle] = useAtom(headerTitleState)

   const setHeader = (title: string) => {
      setHeaderTitle(title)
   }

   return { headerTitle, setHeader }
}

export default useHeader
