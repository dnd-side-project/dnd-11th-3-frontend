import { PropsWithChildren } from 'react'
import { badgeWrapper } from './badge.css'

export interface BadgeProps {
   variant: 'primary' | 'secondary' | 'outlined' | 'light'
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
