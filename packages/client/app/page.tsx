import SNSLogin from '@gmi-design-system/component/SignIn/SNSLogin'
import * as styles from './signin.css'

export default function Signin() {
   return (
      <div className={styles.Wrapper}>
         <div className={styles.TextWrapper}>
            <div className={styles.TitleTxt}>
               <span>공무원 업무습득</span>
               <span>Q&A 서비스</span>
            </div>
            <div className={styles.TitleTxt}>
               <span>어렵고 헷갈렸던 업무를</span>
               <span>이제 공무인과 함께</span>
               <span>차근차근 해결해 나가요!</span>
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
