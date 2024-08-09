import React from 'react'
import Image from 'next/image'
import OChatIcon from '@/icon/components/nav/Ochat.svg'
import XChatIcon from '@/icon/components/nav/Xchat.svg'
import OHomeIcon from '@/icon/components/nav/Ohome.svg'
import XHomeIcon from '@/icon/components/nav/Xhome.svg'
import OmyIcon from '@/icon/components/nav/Omy.svg'
import XmyIcon from '@/icon/components/nav/Xmy.svg'
import NavItem from './NavItem'
import { NavIcon, NavText, NavigatorWrapper } from './Nav.css'

interface Props {
   // 슬래시를 포함한 현재 라우팅 경로
   curRoute: string
   // 라우팅 함수
   handleRoute: (url: string) => void
}

function Nav({ curRoute, handleRoute }: Props) {
   const items = [
      {
         Oicon: <Image src={OHomeIcon} alt="home icon" />,
         Xicon: <Image src={XHomeIcon} alt="home icon" />,
         title: 'Q&A',
         url: '/home',
      },
      {
         Oicon: <Image src={OChatIcon} alt="chat icon" />,
         Xicon: <Image src={XChatIcon} alt="chat icon" />,
         title: '대화',
         url: '/chat',
      },
      {
         Oicon: <Image src={OmyIcon} alt="mypage icon" />,
         Xicon: <Image src={XmyIcon} alt="mypage icon" />,
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
               <span className={NavIcon}>
                  {item.url === curRoute ? item.Oicon : item.Xicon}
               </span>
               <span className={NavText}>{item.title}</span>
            </NavItem>
         ))}
      </div>
   )
}

export default Nav
