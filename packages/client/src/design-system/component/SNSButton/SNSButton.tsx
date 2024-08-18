import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as styles from './SNSButton.css'
import { IconKakao } from '../../icon/default/IconKakao'
import { IconNaver } from '../../icon/default/IconNaver'

interface SNSButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   socialLoginType: 'kakao' | 'naver'
   children: ReactNode
}

export function SNSButton({
   socialLoginType,
   children,
   ...props
}: SNSButtonProps) {
   return (
      <button
         className={styles.Wrapper({
            backgroundColor: socialLoginType,
         })}
         type="button"
         {...props}
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
      </button>
   )
}
