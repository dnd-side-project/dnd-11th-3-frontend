'use client'

import { Button } from '@gds/component'
import { SignUpType } from '@entities/@types/signup'
import { ChangeEvent, useState } from 'react'
import { color } from '@gds/token'
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
         <span className={styles.Title}>
            공무원 이메일 인증<span style={{ color: color.error }}>*</span>
         </span>
         <div
            className={styles.InputBtnWrapper}
            style={{ marginBottom: '16px' }}
         >
            {/** TODO: input 디자인시스템 적용 */}
            <input
               name="officialEmail"
               value={essentialData.officialEmail}
               onChange={handleOnChange}
            />
            <Button
               style={{ width: '58px', marginLeft: '8px' }}
               size="small"
               disabled={essentialData.officialEmail.length > 0}
               variant="filled"
            >
               인증
            </Button>
         </div>
         <div className={styles.InputBtnWrapper}>
            {/** TODO: input 디자인시스템 적용 */}

            <input
               name="authCode"
               value={authCode}
               onChange={handleOnChangeAuthCode}
            />
            <Button
               style={{ width: '58px', marginLeft: '8px' }}
               size="small"
               disabled={authCode.length <= 0}
               variant="filled"
            >
               확인
            </Button>
         </div>
         <span className={styles.Title}>
            닉네임<span style={{ color: color.error }}>*</span>
         </span>
         <div className={styles.InputBtnWrapper}>
            {/** TODO: input 디자인시스템 적용 */}
            <input
               name="nickname"
               value={essentialData.nickname}
               onChange={handleOnChange}
            />
            <Button
               style={{ width: '86px', marginLeft: '8px' }}
               size="small"
               disabled={essentialData.nickname.length <= 0}
               variant="filled"
            >
               중복확인
            </Button>
         </div>
         <div
            className={styles.InputBtnWrapper}
            style={{ flexDirection: 'column' }}
         >
            <span className={styles.Title}>
               직군<span style={{ color: color.error }}>*</span>
            </span>
            {/** TODO: select 디자인시스템 적용 */}
            <input
               name="jobGroup"
               value={essentialData.jobGroup}
               onChange={handleOnChange}
            />
         </div>
         <span className={styles.Title}>
            직렬<span style={{ color: color.error }}>*</span>
         </span>
         {/** TODO: select 디자인시스템 적용 */}
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
