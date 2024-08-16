import React from 'react'
import * as styles from './SNSButton.css'
import { IconKakao } from '../../icon/default/IconKakao'
import { IconNaver } from '../../icon/default/IconNaver'

interface LoginProps {
  socialLoginType: 'kakao' | 'naver'
  children: React.ReactNode
}

const SNSLogin = ({ socialLoginType, children }: LoginProps) => {
  return (
    <div
      className={styles.Wrapper({
        backgroundColor: socialLoginType,
      })}
    >
      <div className={styles.LogoBox}>
        {socialLoginType === 'kakao' ? <IconKakao /> : <IconNaver />}
      </div>
      <div
        className={styles.TxtBox({
          color: socialLoginType,
        })}
      >
        <span>{children}</span>
      </div>
    </div>
  )
}

export default SNSLogin
