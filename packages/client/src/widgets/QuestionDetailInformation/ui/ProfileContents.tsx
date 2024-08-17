'use client'

import { Divider } from '@gds/component'
import { IconCharacter } from '@gds/icon'
import { color, Typo } from '@gds/token'

import { ReactNode } from 'react'
import {
   profileImageWrapper,
   profileWrapper,
   typoWrapper,
} from './questionDetail.css'

export function ProfileContents({
   title,
   description,
}: {
   title: ReactNode
   description: ReactNode
}) {
   return (
      <>
         <div className={profileWrapper}>
            <div className={profileImageWrapper}>
               <IconCharacter color={color['secondary-main']} size={48} />
            </div>
            <div className={typoWrapper}>
               <h1 className={Typo.body1.sb}>{title}</h1>
               <p className={Typo.body2.md}>{description}</p>
               {/* TODO: fix description font style */}
            </div>
         </div>
         <Divider variant="default" />
      </>
   )
}
