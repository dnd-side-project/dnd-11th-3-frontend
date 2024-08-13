import SNSLogin from './SNSLogin'

export default {
  title: 'Component/LoginButton',
}

export function LoginButton() {
  return (
    <div>
      <div>
        <SNSLogin SNS="카카오" type="시작하기" />
      </div>
      <div style={{ marginTop: '16px' }}>
        <SNSLogin SNS="네이버" type="시작하기" />
      </div>
    </div>
  )
}
