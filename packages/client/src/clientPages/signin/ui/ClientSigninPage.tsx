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
               <SNSButton
                  socialLoginType="naver"
                  onClick={() =>
                     alert('네이버 소셜 로그인 서비스는 준비 중입니다.')
                  }
               >
                  네이버로 시작하기
               </SNSButton>
            </div>
         </div>
      </div>
   )
}
