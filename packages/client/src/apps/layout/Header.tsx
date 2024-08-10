'use client'

import { useRouter } from 'next/navigation'
import { headerWrappewrStyle } from './header.css'

interface Props {
   title?: string
}

export function Header({ title }: Props) {
   const router = useRouter()
   return (
      <div className={headerWrappewrStyle}>
         <button type="button" onClick={() => router.back()}>
            Back
         </button>
         <h1>{title}</h1>
      </div>
   )
}
