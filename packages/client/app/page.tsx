import SNSLogin from '@gmi-design-system/component/SignIn/SNSLogin'
import Image from 'next/image'
import BackGroundImage from '../public/asset/Background.svg'
import * as styles from './signin.css'

export default function Signin() {
   return (
      <div className={styles.Wrapper}>
         <div className={styles.TextWrapper}>
            <div className={styles.TitleTxt}>
               <Image src={BackGroundImage} alt="background image" />
            </div>
         </div>
         <div className={styles.LoginBtnWrapper}>
            <div>
               <SNSLogin socialLoginType="kakao">카카오로 시작하기</SNSLogin>
            </div>
            <div style={{ marginTop: '16px' }}>
               <SNSLogin socialLoginType="naver">네이버로 시작하기</SNSLogin>
            </div>
         </div>
      </div>
   )
}
