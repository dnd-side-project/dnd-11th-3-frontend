import { ProfileUpdateFormValues } from '@entities/profileUpdate'
import { Select, TextInput } from '@gds/component'
import { IconCircleClose } from '@gds/icon'
import { color } from '@gds/token'
import { JOB_CATEGORIES, JOB_GROUPS } from '@shared/model/job'
import { Controller, UseFormReturn } from 'react-hook-form'

interface Props {
   form: UseFormReturn<ProfileUpdateFormValues>
}

export function ProfileUpdateInputSection({ form }: Props) {
   return (
      <div>
         <div>
            <span>닉네임</span>
            <TextInput />
         </div>
         <Controller
            name="jobGroup"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <Select
                  required
                  items={JOB_GROUPS.map((group) => ({
                     label: group,
                     id: group,
                  }))}
                  inputProps={{
                     placeholder: '해당 직군을 선택해주세요',
                     label: '직군',
                     required: true,
                     icon: <IconCircleClose color={color['gray-600']} />,
                  }}
                  selected={value}
                  variant="default"
                  onSelect={(item) => onChange(item)}
               />
            )}
         />
         <Controller
            name="jobCategory"
            control={form.control}
            rules={{
               required: true,
            }}
            render={({ field: { onChange, value } }) => (
               <Select
                  required
                  items={JOB_CATEGORIES.map((category) => ({
                     label: category,
                     id: category,
                  }))}
                  inputProps={{
                     placeholder: '해당 직렬을 선택해주세요',
                     label: '직렬',
                     required: true,
                     icon: <IconCircleClose color={color['gray-600']} />,
                  }}
                  selected={value}
                  variant="default"
                  onSelect={(item) => onChange(item)}
               />
            )}
         />
      </div>
   )
}
