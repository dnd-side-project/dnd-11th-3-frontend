'use client'

import { Button, TextArea, TextInput, IconButton } from '@gds/component'
import { IconAddPhoto } from '@gds/icon'
import { pageWrapper } from './questionCreateInputs.css'

export function QuestionCreateInputs() {
   return (
      <div className={pageWrapper}>
         <TextInput label="제목" placeholder="질문 제목을 작성해주세요" />
         <TextArea
            label="질문 내용 작성"
            placeholder="직무와 관련 분야에 대해서만 질문해 주시면, 더욱 정확하고 유익한 정보를 제공해 드릴 수 있어요. 
소속이나 개인정보를 특정할 수 있는 내용에 대해서는 주의해 주세요!"
            height={258}
         />
         <IconButton variant="outlined" size="large" icon={<IconAddPhoto />} />

         <Button
            variant="filled"
            size="large"
            onClick={() => {
               console.log('Submit')
            }}
         >
            Submit
         </Button>
      </div>
   )
}
