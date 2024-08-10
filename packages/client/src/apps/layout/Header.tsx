'use client'

import { headerWrappewrStyle } from './header.css'

interface Props {
   title?: string
   onBack: () => void
}

export function Header({ title, onBack }: Props) {
   return (
      <div className={headerWrappewrStyle}>
         <button type="button" onClick={onBack}>
            Back
         </button>
         <h1>{title}</h1>
      </div>
   )
}
