'use client'

import { IconButton } from '@gds/component'
import { IconArrowLeft } from '@gds/icon'
import { useRouter } from 'next/navigation'
import {
   arrowButtonWrappewrStyle,
   headerTitleWrappewrStyle,
   headerWrapperStyle,
} from './style.css'

interface Props {
   title?: string
}

export function ChatHeader({ title }: Props) {
   const router = useRouter()
   return (
      <div className={headerWrapperStyle}>
         <div className={arrowButtonWrappewrStyle}>
            <IconButton
               onClick={() => router.back()}
               variant="default"
               aria-label="Back"
               size="small"
               icon={<IconArrowLeft />}
            />
         </div>
         <h1 className={headerTitleWrappewrStyle}>{title}</h1>
      </div>
   )
}
