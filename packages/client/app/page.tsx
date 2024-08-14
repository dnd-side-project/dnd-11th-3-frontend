import SNSLogin from '@gmi-design-system/component/SignIn/SNSLogin'
import Image from 'next/image'
import BackGroundImage from './Background.svg'
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
               <SNSLogin SNS="카카오" type="시작하기" />
            </div>
            <div style={{ marginTop: '16px' }}>
               <SNSLogin SNS="네이버" type="시작하기" />
            </div>
         </div>
      </div>
   )
}
