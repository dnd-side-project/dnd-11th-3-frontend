import { cloneElement, ReactElement } from 'react'
import { IconProps } from '../../icon'
import { color } from '../../token/Color/color'
import { buttonStyle, iconWrapperStyle } from './button.css'
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outlined'
  size: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  disabled?: boolean
  icon?: ReactElement<IconProps>
}

export function Button({ children, size, disabled, icon, variant, ...props }: Props) {
  const Icon = icon
  return (
    <button
      className={buttonStyle({ size, variant: disabled ? 'disabled' : variant })}
      disabled={disabled}
      {...props}
    >
      {children}
      {!!Icon && (
        <div className={iconWrapperStyle}>
          {cloneElement(icon, {
            //TODO: refactor not to use cloneElement
            color: disabled
              ? color['gray-400']
              : variant === 'filled'
                ? color['white']
                : color['gray-200'],
            size: size === 'small' ? 16 : size === 'medium' ? 18 : 22,
          })}
        </div>
      )}
    </button>
  )
}
