'use client'

import Image from 'next/image'
import { SNSButton } from '@gds/component'
import { useRouter } from 'next/navigation'
import { PageURL } from '@shared/model'
import Link from 'next/link'
import { IconLogoFilled, PrimarySmile, SplashLogo } from '@gds/icon'
import { Typo } from '@gds/token'
import BackGroundImage from '../../../../public/asset/Background.svg'
import * as styles from './style.css'

export function ClientSignupSuccessPage() {
   const router = useRouter()

   return (
      <div className={styles.Wrapper}>
         <div className={styles.TextWrapper}>
            <div className={styles.TitleTxt}>
               {/* <Image src={BackGroundImage} alt="background image" /> */}
               {/* <IconLogoFilled size={120} /> */}
               <SplashLogo size={300} />
            </div>
         </div>
         <div className={Typo.h1.lg} color="white">
            회원가입에 성공했습니다
         </div>
         <div className={Typo.h1.sb} color="white">
            지금 바로 로그인해보세요
         </div>
         <div className={styles.LoginBtnWrapper}>
            <div>
               <Link href="https://gongmuin.site/oauth2/authorization/kakao">
                  <SNSButton socialLoginType="kakao">
                     카카오로 시작하기
                  </SNSButton>
               </Link>
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
