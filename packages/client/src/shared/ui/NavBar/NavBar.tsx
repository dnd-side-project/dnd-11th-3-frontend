'use client'

import { usePathname, useRouter } from 'next/navigation'
import { PageURL } from '@shared/model'
import { IconHome, IconHuman, IconNavbarChat } from '@gds/icon'
import { color } from '@gds/token'
import { navbarWrapperStyle } from './navbar.css'

export function NavBar() {
   const router = useRouter()
   const currentUrl = usePathname()

   return (
      <div className={navbarWrapperStyle}>
         <button
            type="button"
            onClick={() => router.push(PageURL.HOME)}
            aria-label="홈"
         >
            <IconHome
               size={32}
               color={
                  currentUrl === PageURL.HOME
                     ? color['gray-200']
                     : color['gray-400']
               }
            />
            Q&A
         </button>
         <button
            type="button"
            onClick={() => router.push(PageURL.CHAT)}
            aria-label="채팅"
         >
            <IconNavbarChat
               size={32}
               color={
                  currentUrl === PageURL.CHAT
                     ? color['gray-200']
                     : color['gray-400']
               }
            />
            대화
         </button>
         <button
            type="button"
            onClick={() => router.push(PageURL.ACCOUNT)}
            aria-label="마이페이지"
         >
            <IconHuman
               size={32}
               color={
                  currentUrl === PageURL.ACCOUNT
                     ? color['gray-200']
                     : color['gray-400']
               }
            />
            마이페이지
         </button>
      </div>
   )
}
