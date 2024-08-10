import { forwardRef } from 'react'
import {
  textInputStyle,
  textInputLabelContainerStyle,
  textInputLabelStyle,
  textInputWrapperStyle,
  textMetaStyle,
} from './textInput.css'

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
  errorMessage?: string
  icon?: React.ReactNode
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, description, errorMessage, icon, ...props }, ref) => {
    const Icon = icon
    return (
      <div className={textInputLabelContainerStyle}>
        <div className={textInputLabelStyle}>{label}</div>
        <div
          className={textInputWrapperStyle({
            color: props.disabled ? 'disabled' : errorMessage ? 'error' : 'default',
          })}
        >
          <input
            className={textInputStyle({
              color: props.disabled ? 'disabled' : errorMessage ? 'error' : 'default',
            })}
            {...props}
            ref={ref}
          />
          {Icon}
        </div>
        {(errorMessage || description) && (
          <div
            className={textMetaStyle({
              color: props.disabled ? 'disabled' : errorMessage ? 'error' : 'default',
            })}
          >
            {!props.disabled && errorMessage ? errorMessage : description}
          </div>
        )}
      </div>
    )
  },
)
