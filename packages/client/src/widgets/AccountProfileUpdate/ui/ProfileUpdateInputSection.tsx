import { ProfileUpdateFormValues } from '@entities/profileUpdate'
import { Select, TextInput } from '@gds/component'
import { IconCircleClose } from '@gds/icon'
import { color } from '@gds/token'
import { JOB_CATEGORIES, JOB_GROUPS } from '@shared/model/job'
import { Controller, UseFormReturn } from 'react-hook-form'
import { LabeledInputWithButton } from '@shared/ui'
import { usePostNicknameDuplCheck } from '@shared/api'
import { controlMarginBox } from './style.css'

interface Props {
   form: UseFormReturn<ProfileUpdateFormValues>
}

export function ProfileUpdateInputSection({ form }: Props) {
   const { nicknameVerified } = form.watch()
   const { mutate: checkNickNameDuplication } = usePostNicknameDuplCheck()

   return (
      <div>
         <div style={{ marginBottom: '36px' }}>
            <Controller
               name="nickname"
               control={form.control}
               rules={{
                  required: true,
               }}
               render={({
                  field: { onChange, value },
                  fieldState: { error },
               }) => (
                  <LabeledInputWithButton
                     inputProps={{
                        minLength: 2,
                        maxLength: 12,
                        width: 264,
                        label: '닉네임', // TODO: 기존 닉네임 넣기
                        description: '2-12자 이내로 입력해주세요.',
                        onChange: (e) => {
                           if (error) {
                              form.clearErrors('nickname')
                           }
                           onChange(e.target.value)
                        },
                        value,
                        successMessage: nicknameVerified
                           ? '사용 가능한 닉네임입니다.'
                           : '',
                        errormessage:
                           error?.type === 'server'
                              ? error.message
                              : error?.type === 'validation'
                                ? error.message
                                : '',
                     }}
                     buttonProps={{
                        width: 86,
                        variant: 'filled',
                        disabled: value.length < 2,
                        onClick: () => {
                           if (nicknameVerified) {
                              form.setValue('nicknameVerified', false)
                           }
                           checkNickNameDuplication(
                              {
                                 nickname: value,
                              },
                              {
                                 onSuccess: () => {
                                    form.clearErrors('nickname')
                                    form.setValue('nicknameVerified', true)
                                 },
                                 onError: () => {
                                    form.setError('nickname', {
                                       message:
                                          '서버 에러가 발생했습니다. 다시 시도해주세요.',
                                       type: 'server',
                                    })

                                    // form.setError('nickname', { //TODO: 서버에서 에러메세지 받아오기
                                    //    message: '이미 사용중인 닉네임입니다.',
                                    //    type: 'validation',
                                    // })
                                 },
                              },
                           )
                        },
                     }}
                     buttonChildren="중복확인"
                  />
               )}
            />
         </div>
         <Controller
            name="jobGroup"
            control={form.control}
            rules={{
               required: false,
            }}
            render={({ field: { onChange, value } }) => (
               <Select
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
         <div className={controlMarginBox}>
            <Controller
               name="jobCategory"
               control={form.control}
               rules={{
                  required: false,
               }}
               render={({ field: { onChange, value } }) => (
                  <Select
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
      </div>
   )
}
