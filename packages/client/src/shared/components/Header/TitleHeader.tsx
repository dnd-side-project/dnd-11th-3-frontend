import React from 'react'
import Image from 'next/image'
import BackIcon from '@public/svgs/components/header/back.svg'
import { BackButton, HeaderTitle, HeaderWrapper } from './Header.css'

interface HProps {
   title: string
   onBack: () => void
}

function TitleHeader({ title, onBack }: HProps) {
   return (
      <div className={HeaderWrapper}>
         <button type="button" className={BackButton} onClick={onBack}>
            <Image src={BackIcon} alt="back button" />
         </button>
         <div className={HeaderTitle}>{title}</div>
      </div>
   )
}

export default TitleHeader
