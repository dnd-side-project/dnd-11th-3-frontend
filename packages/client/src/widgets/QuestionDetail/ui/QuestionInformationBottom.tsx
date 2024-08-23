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
   unClickable?: boolean
}
export function QuestionInformationBottom({
   questionData,
   onClick,
   unClickable = false,
}: Props) {
   return (
      <div className={bottomWrapper}>
         <p className={Typo.body2.md}>
            {new Date(String(questionData?.createdAt)).toLocaleDateString()}
         </p>
         <div className={bottomButtonWrapper}>
            <Button
               variant="outlined"
               size="small"
               onClick={() => onClick(QuestionMetaDataType.LIKE)}
               disabled={unClickable}
               leftIcon={
                  <IconThumbUpFilled color={color['tertiary-main']} size={16} />
               }
            >
               {questionData?.recommendCount || 0}
            </Button>
            <Button
               variant="outlined"
               size="small"
               onClick={() => onClick(QuestionMetaDataType.BOOKMARK)}
               disabled={unClickable}
               leftIcon={
                  <IconBookmarkFilled color={color['primary-main']} size={16} />
               }
            >
               {questionData?.savedCount || 0}
            </Button>
         </div>
      </div>
   )
}
