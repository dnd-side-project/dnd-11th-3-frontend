'use client'

import { useRouter } from 'next/navigation'
import { IconArrowLeft } from 'gmi-design-system'
import {
   arrowButtonWrappewrStyle,
   headerTitleWrappewrStyle,
   headerWrapperStyle,
} from './header.css'

interface Props {
   title?: string
}

export function Header({ title }: Props) {
   const router = useRouter()
   return (
      <div className={headerWrapperStyle}>
         <button
            className={arrowButtonWrappewrStyle}
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
         >
            <IconArrowLeft />
         </button>
         <div className={headerTitleWrappewrStyle}>{title}</div>
      </div>
   )
}
