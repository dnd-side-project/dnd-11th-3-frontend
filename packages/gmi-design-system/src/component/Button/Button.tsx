import { cloneElement, ReactElement } from 'react'
import { IconProps } from '../../icon'
import { color } from '../../token'
import { buttonStyle, leftIconWrapperStyle, rightIconWrapperStyle } from './button.css'
import { Spinner } from '../Spinner/Spinner'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'filled' | 'outlined'
  size: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  disabled?: boolean
  rightIcon?: ReactElement<IconProps>
  leftIcon?: ReactElement<IconProps>
  rounded?: boolean
  loading?: boolean
}

export function Button({
  children,
  size,
  disabled,
  leftIcon,
  rightIcon,
  variant,
  rounded = false,
  loading = false,
  ...props
}: ButtonProps) {
  if (loading) {
    return (
      <button
        type="button"
        className={buttonStyle({
          size,
          variant,
          rounded,
        })}
        disabled
        {...props}
      >
        <Spinner color={variant === 'filled' ? color.white : color['primary-main']} size="small" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className={buttonStyle({
        size,
        variant: disabled ? 'disabled' : variant,
        rounded,
      })}
      disabled={disabled}
      {...props}
    >
      {!!leftIcon && (
        <div className={leftIconWrapperStyle}>
          {disabled || variant === 'filled'
            ? cloneElement(leftIcon, {
                // TODO: refactor not to use cloneElement
                color: disabled ? color['gray-400'] : color.white,
              })
            : leftIcon}
        </div>
      )}
      {children}
      {!!rightIcon && (
        <div className={rightIconWrapperStyle}>
          {disabled || variant === 'filled'
            ? cloneElement(rightIcon, {
                // TODO: refactor not to use cloneElement
                color: disabled ? color['gray-400'] : color.white,
              })
            : rightIcon}
        </div>
      )}
    </button>
  )
}
