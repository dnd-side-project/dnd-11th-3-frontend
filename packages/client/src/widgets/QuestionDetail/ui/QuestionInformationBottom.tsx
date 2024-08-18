'use client'

import { Button } from '@gds/component'
import { IconBookmarkFilled, IconThumbUpFilled } from '@gds/icon'
import { color, Typo } from '@gds/token'

import { bottomButtonWrapper, bottomWrapper } from './style.css'

export function QuestionInformationBottom() {
   return (
      <div className={bottomWrapper}>
         <p className={Typo.body2.md}>{new Date().toLocaleDateString()}</p>
         <div className={bottomButtonWrapper}>
            <Button
               variant="outlined"
               size="small"
               leftIcon={
                  <IconThumbUpFilled color={color['tertiary-main']} size={16} />
               }
            >
               0
            </Button>
            <Button
               variant="outlined"
               size="small"
               leftIcon={
                  <IconBookmarkFilled color={color['primary-main']} size={16} />
               }
            >
               0
            </Button>
         </div>
      </div>
   )
}
