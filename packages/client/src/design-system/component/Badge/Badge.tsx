import { IconCredit } from '@gds/icon'
import { badgeWrapper, CreditBox, IconBox, TextSpan } from './index.css'

export interface BadgeProps {
   variant: 'filled' | 'outlined'
   // color: CSSProperties
}

export function Badge({ variant, children }: PropsWithChildren<BadgeProps>) {
   return (
      <div
         className={badgeWrapper({
            variant,
         })}
      >
         {children}
      </div>
   )
}
