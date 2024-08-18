'use client'

import Image from 'next/image'
import { SNSButton } from '@gds/component'
import BackGroundImage from '../../../../public/asset/Background.svg'
import * as styles from './signin.css'

export function ClientSigninPage() {
   return (
      <div className={styles.Wrapper}>
         <div className={styles.TextWrapper}>
            <div className={styles.TitleTxt}>
               <Image src={BackGroundImage} alt="background image" />
            </div>
         </div>
         <div className={styles.LoginBtnWrapper}>
            <div>
               <SNSButton socialLoginType="kakao">카카오로 시작하기</SNSButton>
            </div>
            <div style={{ marginTop: '16px' }}>
               <SNSButton socialLoginType="naver">네이버로 시작하기</SNSButton>
            </div>
         </div>
      </div>
   )
}
