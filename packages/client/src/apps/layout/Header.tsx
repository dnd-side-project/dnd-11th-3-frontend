'use client'

import { useRouter } from 'next/navigation'
import { IconArrowLeft } from '@gmi-design-system/icon'
import {
   arrowButtonWrappewrStyle,
   headerTitleWrappewrStyle,
   headerWrappewrStyle,
} from './header.css'

interface Props {
   title?: string
}

export function Header({ title }: Props) {
   const router = useRouter()
   return (
      <div className={headerWrappewrStyle}>
         <button
            className={arrowButtonWrappewrStyle}
            type="button"
            onClick={() => router.back()}
            aria-label="Go back"
         >
            <IconArrowLeft />
         </button>
         <h1 className={headerTitleWrappewrStyle}>{title}</h1>
      </div>
   )
}
