import { cloneElement, forwardRef, ReactElement } from 'react'
import {
  textInputStyle,
  textInputLabelContainerStyle,
  textInputLabelStyle,
  textInputWrapperStyle,
  textMetaStyle,
} from './textInput.css'
import { color } from '../../token'

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  errorMessage?: string
  icon?: ReactElement
  variant?: 'default' | 'filled'
}

export const INPUT_BG_COLOR = {
  default: color.white,
  filled: color['gray-000'],
  disabled: color['gray-900'],
}
export const INPUT_COLOR = {
  default: color['gray-100'],
  filled: color['gray-100'],
  disabled: color['gray-500'],
  error: color.error,
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, description, errorMessage, variant = 'default', icon, ...props }, ref) => {
    const Icon = icon
    return (
      <div className={textInputLabelContainerStyle}>
        {label && <div className={textInputLabelStyle}>{label}</div>}
        <div
          className={textInputWrapperStyle({
            color: props.disabled ? 'disabled' : errorMessage ? 'error' : variant,
          })}
        >
          <input
            className={textInputStyle({
              color: props.disabled ? 'disabled' : errorMessage ? 'error' : variant,
            })}
            {...props}
            ref={ref}
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
        {(errorMessage || description) && (
          <div
            className={textMetaStyle({
              color: props.disabled ? 'disabled' : errorMessage ? 'error' : variant,
            })}
          >
            {!props.disabled && errorMessage ? errorMessage : description}
          </div>
        )}
      </div>
    )
  },
)
