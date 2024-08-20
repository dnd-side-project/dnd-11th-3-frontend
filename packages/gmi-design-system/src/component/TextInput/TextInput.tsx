import { cloneElement, ReactElement, ReactNode } from 'react'

import {
  textInputLabelStyle,
  textInputStyle,
  textInputWrapperStyle,
  textMetaStyle,
  INPUT_COLOR,
  asteriskStyle,
  textInputContainerStyle,
} from './textInput.css'

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode
  description?: string
  errorMessage?: string
  successMessage?: string
  icon?: ReactElement
  variant?: 'default' | 'filled'
  required?: boolean
  size?: 'medium' | 'large'
}

export function TextInput({
  label,
  description,
  errorMessage,
  successMessage,
  variant = 'default',
  icon,
  required = false,
  size = 'large',
  ...props
}: TextInputProps) {
  const Icon = icon
  return (
    <div>
      <div className={textInputContainerStyle}>
        {label && (
          <div className={textInputLabelStyle}>
            {label}
            {required && <span className={asteriskStyle}>*</span>}
          </div>
        )}

        <div
          className={textInputWrapperStyle({
            color: props.disabled ? 'disabled' : errorMessage ? 'error' : variant,
            size,
          })}
        >
          <input
            className={textInputStyle({
              color: props.disabled ? 'disabled' : errorMessage ? 'error' : variant,
            })}
            {...props}
          />
          {!!Icon &&
            // TODO: refactor not to use cloneElement
            cloneElement(Icon, {
              color: props.disabled
                ? INPUT_COLOR.disabled
                : errorMessage
                  ? INPUT_COLOR.error
                  : INPUT_COLOR.default,
            })}
        </div>
        <div
          className={textMetaStyle({
            color: props.disabled
              ? 'disabled'
              : errorMessage
                ? 'error'
                : successMessage
                  ? 'success'
                  : variant,
          })}
        >
          {(errorMessage || successMessage || description) && !props.disabled && errorMessage
            ? errorMessage
            : successMessage || description}
        </div>
      </div>
    </div>
  )
}
