'use client'

import { useRouter } from 'next/navigation'
import { IconArrowLeft, IconEdit } from 'src/design-system/icon'
import { IconButton } from '@gds/component'
import {
   arrowButtonWrappewrStyle,
   headerTitleWrappewrStyle,
   headerWrapperStyle,
} from './style.css'

interface Props {
   title?: string
}

export function QuestionDetailHeader({ title }: Props) {
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
         {/* TODO: not to show this button if not the writer */}
         <IconButton
            variant="default"
            aria-label="Edit"
            size="small"
            icon={<IconEdit />}
         />
      </div>
   )
}
