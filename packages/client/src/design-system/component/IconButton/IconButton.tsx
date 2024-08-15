import { ReactElement } from 'react'
import { IconProps } from '../../icon'

import { iconButtonWrapperStyle } from './iconButton.css'

export interface IconButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant: 'default' | 'outlined'
   size: 'small' | 'medium' | 'large'
   children?: React.ReactNode
   disabled?: boolean
   icon: ReactElement<IconProps>
}

export function IconButton({
   children,
   size,
   disabled,
   icon,
   variant = 'default',
   ...props
}: IconButtonProps) {
   const Icon = icon
   return (
      <button
         type="button"
         className={iconButtonWrapperStyle({
            size,
            variant: disabled ? 'disabled' : variant,
         })}
         disabled={disabled}
         {...props}
      >
         {Icon}
      </button>
   )
}
