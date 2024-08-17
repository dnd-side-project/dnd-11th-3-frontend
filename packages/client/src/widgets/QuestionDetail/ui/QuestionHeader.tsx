'use client'

import { useRouter } from 'next/navigation'
import { IconArrowLeft } from 'src/design-system/icon'
import {
   arrowButtonWrappewrStyle,
   headerTitleWrappewrStyle,
   headerWrapperStyle,
} from './style.css'

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
         <h1 className={headerTitleWrappewrStyle}>{title}</h1>
      </div>
   )
}
