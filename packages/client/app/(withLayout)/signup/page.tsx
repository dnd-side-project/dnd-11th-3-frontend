'use client'

import { Button } from '@gmi-design-system/component/Button/Button'
// import { Select } from '@gmi-design-system/component/Select/Select'
// import { TextInput } from '@gmi-design-system/component/TextInput/TextInput'
import * as styles from './index.css'

export default function Signup() {
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
            <input />
            <Button size="small" variant="disabled">
               인증
            </Button>
         </div>
         <div className={styles.InputBtnWrapper}>
            {/* <TextInput
               label="Label"
               description="Description"
               placeholder="Placeholder"
            /> */}
            <input />
            <Button size="small" variant="disabled">
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
            <input />
            <Button size="small" variant="disabled">
               중복확인
            </Button>
         </div>
         <div className={styles.Title}>직군</div>
         {/** TODO: select */}
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
         <div className={styles.Title}>직렬</div> {/** TODO: select */}
         <div className={styles.FinalBtnBox}>
            <Button type="button" size="medium" variant="disabled">
               가입하기
            </Button>
         </div>
      </div>
   )
}
