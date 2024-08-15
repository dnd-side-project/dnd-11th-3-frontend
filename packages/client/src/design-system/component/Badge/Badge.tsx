import { PropsWithChildren } from 'react'
import { badgeWrapper } from './index.css'

export interface BadgeProps {
   variant: 'primary' | 'secondary' | 'outlined'
   size: 'small' | 'medium' | 'large'
}

export function Badge({
   variant,
   children,
   size,
}: PropsWithChildren<BadgeProps>) {
   return (
      <div
         className={badgeWrapper({
            variant,
            size,
         })}
      >
         {children}
      </div>
   )
}
