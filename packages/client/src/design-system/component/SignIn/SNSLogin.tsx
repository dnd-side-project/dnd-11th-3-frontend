import React from 'react'
import { IconKakao, IconNaver } from '@gds/icon'
import * as styles from './SNSButton.css'

export interface LoginProps {
   socialLoginType: 'kakao' | 'naver'
   children: React.ReactNode
}

export function SNSLogin({ socialLoginType, children }: LoginProps) {
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
