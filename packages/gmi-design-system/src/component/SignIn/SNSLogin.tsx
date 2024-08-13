import React from 'react'
import * as styles from './SNSButton.css'
import { IconKakao } from '../../icon/default/IconKakao'
import { IconNaver } from '../../icon/default/IconNaver'

interface LoginProps {
  SNS: '카카오' | '네이버'
  type: '시작하기' | '계속하기'
}

const SNSLogin = ({ SNS, type }: LoginProps) => {
  return (
    <div
      className={styles.Wrapper({
        backgroundColor: SNS === '카카오' ? 'kakao' : 'naver',
      })}
    >
      <div className={styles.LogoBox}> {SNS === '카카오' ? <IconKakao /> : <IconNaver />}</div>
      <div
        className={styles.TxtBox({
          color: SNS === '카카오' ? 'kakao' : 'naver',
        })}
      >
        <span>
          {SNS}로 {type}
        </span>
      </div>
    </div>
  )
}

export default SNSLogin
