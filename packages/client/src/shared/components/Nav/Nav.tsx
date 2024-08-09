import React from 'react'
import { NavIcon, NavText, NavigatorWrapper } from './Nav.css'
import NavItem from './NavItem'

interface Props {
   // 슬래시를 포함한 현재 라우팅 경로
   curRoute: string
   // 라우팅 함수
   handleRoute: (url: string) => void
}

function Nav({ curRoute, handleRoute }: Props) {
   const items = [
      {
         icon: '',
         title: 'Q&A',
         url: '/home',
      },
      {
         icon: '',
         title: '대화',
         url: '/chat',
      },
      {
         icon: '',
         title: '마이페이지',
         url: '/account',
      },
   ]

   return (
      <div className={NavigatorWrapper}>
         {items.map((item) => (
            <NavItem
               checked={item.url === curRoute}
               onClick={() => handleRoute(item.url)}
               key={item.title}
            >
               <span className={NavIcon}>{item.icon}</span>
               <span className={NavText}>{item.title}</span>
            </NavItem>
         ))}
      </div>
   )
}

export default Nav
