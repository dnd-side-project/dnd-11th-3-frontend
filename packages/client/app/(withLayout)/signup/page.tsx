'use client'

import { Button } from '@gmi-design-system/component/Button/Button'
// import { Select } from '@gmi-design-system/component/Select/Select'
// import { TextInput } from '@gmi-design-system/component/TextInput/TextInput'
import { SignUpType } from '@entities/@types/signup'
import { ChangeEvent, useState } from 'react'
import * as styles from './index.css'

export type EssentialDataType = SignUpType & {
   isAuth: boolean
}

export default function Signup() {
   const [authCode, setAuthCode] = useState<string>('')
   const [essentialData, setEssentialData] = useState<EssentialDataType>({
      officialEmail: '',
      nickname: '',
      jobGroup: '',
      jobCategory: '',
      isAuth: true,
   })

   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setEssentialData((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleOnChangeAuthCode = (e: ChangeEvent<HTMLInputElement>) => {
      setAuthCode(e.target.value)
   }

   const isFormComplete =
      essentialData.officialEmail.length > 0 &&
      essentialData.nickname.length > 0 &&
      essentialData.jobGroup.length > 0 &&
      essentialData.jobCategory.length > 0 &&
      essentialData.isAuth

   return (
      <div className={styles.Wrapper}>
         <div className={styles.Title}>공무원 이메일 인증</div>
         <div
            className={styles.InputBtnWrapper}
            style={{ marginBottom: '16px' }}
         >
            {/* <TextInput
               label="Label"
               description="Description"
               placeholder="Placeholder"
            /> */}
            <input
               name="officialEmail"
               value={essentialData.officialEmail}
               onChange={handleOnChange}
            />
            <Button
               style={{ width: '58px', marginLeft: '8px' }}
               size="small"
               variant={`${essentialData.officialEmail.length > 0 ? 'filled' : 'disabled'}`}
            >
               인증
            </Button>
         </div>
         <div className={styles.InputBtnWrapper}>
            {/* <TextInput
               label="Label"
               description="공무원 인증이 완료되었습니다."
               placeholder="Placeholder"
            /> */}
            <input
               name="authCode"
               value={authCode}
               onChange={handleOnChangeAuthCode}
            />
            <Button
               style={{ width: '58px', marginLeft: '8px' }}
               size="small"
               variant={`${authCode.length > 0 ? 'filled' : 'disabled'}`}
            >
               확인
            </Button>
         </div>
         <div className={styles.Title}>닉네임</div>
         <div className={styles.InputBtnWrapper}>
            {/* <TextInput
               label="Label"
               description="2 - 12자 이내로 입력해주세요"
               placeholder="Placeholder"
            /> */}
            <input
               name="nickname"
               value={essentialData.nickname}
               onChange={handleOnChange}
            />
            <Button
               style={{ width: '86px', marginLeft: '8px' }}
               size="small"
               variant={`${essentialData.nickname.length > 0 ? 'filled' : 'disabled'}`}
            >
               중복확인
            </Button>
         </div>
         <div className={styles.Title}>직군</div>
         {/** TODO: select 디자인시스템 적용 */}
         {/* <Select
            inputProps={{
               icon: <IconSearch />,
               variant: 'filled',
            }}
            onSelect={(item) =>
               setSelectedWithIcon(item as { label: string; id: string })
            }
            selected={selectedWithIcon}
            items={[{ label: 'Option 1', id: '1' }]}
         /> */}
         <input
            name="jobGroup"
            value={essentialData.jobGroup}
            onChange={handleOnChange}
         />
         <div className={styles.Title}>직렬</div> {/** TODO: select */}
         <input
            name="jobCategory"
            value={essentialData.jobCategory}
            onChange={handleOnChange}
         />
         <div className={styles.FinalBtnBox}>
            <Button
               type="button"
               size="medium"
               variant={isFormComplete ? 'filled' : 'disabled'}
            >
               가입하기
            </Button>
         </div>
      </div>
   )
}
