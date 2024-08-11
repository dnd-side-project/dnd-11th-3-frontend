import { HomeHeader } from '@widgets/HomeHeader/HomeHeader'
import { HomeWrapper } from './index.css'

export default function Home() {
   return (
      <div className={HomeWrapper}>
         <HomeHeader />
         <main />
      </div>
   )
}
