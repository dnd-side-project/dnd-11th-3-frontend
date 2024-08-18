import { SNSButton as SNSLogin } from './SNSButton'

export default {
   title: 'Component/SNSButton',
}

export function LoginButton() {
   return (
      <div style={{ width: '358px' }}>
         <div>
            <SNSLogin socialLoginType="kakao">시작하기</SNSLogin>
         </div>
         <div style={{ marginTop: '16px' }}>
            <SNSLogin socialLoginType="naver">시작하기</SNSLogin>
         </div>
      </div>
   )
}
