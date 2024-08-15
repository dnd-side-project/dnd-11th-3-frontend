'use client'

import { useRouter } from 'next/navigation'
import { PageURL } from '@shared/model'
import { navbarWrapperStyle } from './navbar.css'

export function NavBar() {
   const router = useRouter()

   return (
      <div className={navbarWrapperStyle}>
         <button
            type="button"
            onClick={() => router.push(PageURL.HOME)}
            aria-label="홈"
         >
            Q&A
         </button>
         <button
            type="button"
            onClick={() => router.push(PageURL.CHAT)}
            aria-label="채팅"
         >
            대화
         </button>
         <button
            type="button"
            onClick={() => router.push(PageURL.ACCOUNT)}
            aria-label="마이페이지"
         >
            마이페이지
         </button>
      </div>
   )
}
