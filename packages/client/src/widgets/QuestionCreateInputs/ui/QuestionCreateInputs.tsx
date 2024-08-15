'use client'

import { Button, TextArea, TextInput, IconButton, Select } from '@gds/component'
import { IconAddPhoto, IconSearch } from '@gds/icon'
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
         <IconButton // TODO: add Image Upload logic
            variant="outlined"
            size="large"
            icon={<IconAddPhoto size={32} />}
         />
         <Select // TODO: add Search Select and remove the default select
            items={[{ label: 'TODO', id: 'TODO' }]}
            selected={null}
            onSelect={() => alert('TODO')}
            inputProps={{
               icon: <IconSearch size={20} />,
               placeholder: '해당 직군을 입력해주세요',
               label: '직군 선택',
            }}
         />
         <Button
            type="submit"
            variant="filled"
            size="large"
            onClick={() => {
               console.log('Submit')
            }}
         >
            질문 게시하기
         </Button>
      </div>
   )
}
