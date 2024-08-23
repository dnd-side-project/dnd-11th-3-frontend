'use client'

import { Button } from '@gds/component'
import { IconBookmarkFilled, IconThumbUpFilled } from '@gds/icon'
import { color, Typo } from '@gds/token'

import { QuestionPostDetailResponse } from '@server-api/api'
import { QuestionMetaDataType } from '@shared/model'
import { bottomButtonWrapper, bottomWrapper } from './style.css'

interface Props {
   questionData: QuestionPostDetailResponse | undefined
   onClick: (type: QuestionMetaDataType) => void

   liked?: boolean
   bookmarked?: boolean
}
export function QuestionInformationBottom({
   questionData,
   onClick,

   liked,
   bookmarked,
}: Props) {
   return (
      <div className={bottomWrapper}>
         <p className={Typo.body2.md}>
            {new Date(String(questionData?.createdAt)).toLocaleString()}
         </p>
         <div className={bottomButtonWrapper}>
            <Button
               variant="outlined"
               size="small"
               onClick={() => onClick(QuestionMetaDataType.LIKE)}
               disabled={liked}
               leftIcon={
                  <IconThumbUpFilled
                     // TODO: fix style
                     color={
                        liked ? color['tertiary-main'] : color['tertiary-main']
                     }
                     size={16}
                  />
               }
            >
               {questionData?.recommendCount || 0}
            </Button>
            <Button
               variant="outlined"
               size="small"
               onClick={() => onClick(QuestionMetaDataType.BOOKMARK)}
               disabled={bookmarked}
               leftIcon={
                  // TODO: fix style
                  <IconBookmarkFilled
                     color={
                        liked ? color['primary-main'] : color['primary-main']
                     }
                     size={16}
                  />
               }
            >
               {questionData?.savedCount || 0}
            </Button>
         </div>
      </div>
   )
}
