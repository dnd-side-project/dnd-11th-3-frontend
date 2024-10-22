'use client'

import { useRouter } from 'next/navigation'
import { IconArrowLeft, IconEdit } from 'src/design-system/icon'
import { IconButton } from '@gds/component'
import { PageURL } from '@shared/model'
import {
   arrowButtonWrappewrStyle,
   headerTitleWrappewrStyle,
   headerWrapperStyle,
} from './style.css'

interface Props {
   title?: string
   id?: string
   canUpdate?: boolean
}

export function QuestionDetailHeader({ title, id, canUpdate = false }: Props) {
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
         <h1
            className={headerTitleWrappewrStyle({
               canUpdate,
            })}
         >
            {title}
         </h1>
         {/* TODO: not to show this button if not the writer */}
         {canUpdate && (
            <IconButton
               variant="default"
               aria-label="Edit"
               size="small"
               onClick={() => router.push(`${PageURL.QUESTION_UPDATE}/${id}`)}
               icon={<IconEdit />}
            />
         )}
      </div>
   )
}
