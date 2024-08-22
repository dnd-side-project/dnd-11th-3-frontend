'use client'

import { QuestionFormValues, useValidateQuestion } from '@entities/question'

import {
   Button,
   IconButton,
   NumberInput,
   Select,
   TextArea,
   TextInput,
} from '@gds/component'
import { IconAddPhoto, IconSearch } from '@gds/icon'
import { Controller, UseFormReturn } from 'react-hook-form'
import { pageWrapper } from './questionCreateInputs.css'

interface Props {
   form: UseFormReturn<QuestionFormValues>
   onSubmit: () => void
}

export function QuestionCreateInputs({ form, onSubmit }: Props) {
   const {
      canSubmit,
      getTitleErrorMessage,
      getJobCategoryErrorMessage,
      getContentErrorMessage,
      getRewardErrorMessage,
   } = useValidateQuestion(form)
   return (
      <div className={pageWrapper}>
         <Controller
            name="title"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <TextInput
                  label="제목"
                  placeholder="질문 제목을 작성해주세요"
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                  errormessage={(!!value && getTitleErrorMessage()) || ''}
               />
            )}
         />
         <Controller
            name="content"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <TextArea
                  label="질문 내용 작성"
                  placeholder="직무와 관련 분야에 대해서만 질문해 주시면, 더욱 정확하고 유익한 정보를 제공해 드릴 수 있어요. 
소속이나 개인정보를 특정할 수 있는 내용에 대해서는 주의해 주세요!"
                  height={258}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                  errormessage={(!!value && getContentErrorMessage()) || ''}
               />
            )}
         />
         <IconButton // TODO: add Image Upload logic
            variant="outlined"
            size="large"
            icon={<IconAddPhoto size={32} />}
         />
         <Controller
            name="jobCategory"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <Select // TODO: add Search Select and remove the default select
                  variant="filled"
                  items={[{ label: 'TODO', id: 'TODO' }]}
                  selected={value}
                  onSelect={onChange}
                  inputProps={{
                     icon: <IconSearch size={20} />,
                     placeholder: '해당 직군을 입력해주세요',
                     label: '직군 선택',
                     errormessage:
                        (value !== null && getJobCategoryErrorMessage()) || '',
                  }}
               />
            )}
         />
         <Controller
            name="reward"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <NumberInput
                  label={<>보상 크레딧 설정</>}
                  value={1000}
                  onChange={(e) => onChange(e.target.value)}
                  onUpClick={() => {
                     if (value + 1000 > 100000) {
                        return
                     }
                     onChange(value + 1000)
                  }}
                  onDownClick={() => {
                     if (value - 1000 < 1000) {
                        return
                     }
                     onChange(value - 1000)
                  }}
                  variant="gradient"
                  subTitle="크레딧"
                  errormessage={(!!value && getRewardErrorMessage()) || ''}
                  min={1000}
                  max={10000}
               />
            )}
         />

         <Button
            type="submit"
            variant="filled"
            size="large"
            onClick={() => onSubmit()}
            disabled={!canSubmit}
         >
            질문 게시하기
         </Button>
      </div>
   )
}
