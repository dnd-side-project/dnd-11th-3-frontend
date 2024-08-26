import { cloneElement, ReactElement, ReactNode } from 'react'

import { IconArrowDown, IconArrowUp } from '@gds/icon'
import {
  textInputLabelContainerStyle,
  textInputLabelStyle,
  numberInputStyle,
  textInputWrapperStyle,
  textMetaStyle,
  NUMBER_INPUT_COLOR,
  numberWrapperStyle,
  arrowIconButtonStyle,
} from './numberInput.css'

export interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  subTitle?: ReactNode
  label?: ReactNode
  description?: string
  errormessage?: string
  icon?: ReactElement
  variant?: 'default' | 'filled' | 'gradient'
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onUpClick?: () => void
  onDownClick?: () => void
}

export function NumberInput({
  label,
  description,
  subTitle,
  errormessage,
  variant = 'filled',
  icon,
  value,
  onChange,
  onUpClick,
  onDownClick,
  ...props
}: NumberInputProps) {
  const Icon = icon
  return (
    <div className={textInputLabelContainerStyle}>
      {label && <div className={textInputLabelStyle}>{label}</div>}
      <div
        className={textInputWrapperStyle({
          color: props.disabled ? 'disabled' : errormessage ? 'error' : variant,
        })}
      >
        {!!Icon &&
          // TODO: refactor not to use cloneElement
          cloneElement(Icon, {
            color: props.disabled
              ? NUMBER_INPUT_COLOR.disabled
              : errormessage
                ? NUMBER_INPUT_COLOR.error
                : variant,
          })}
        {subTitle && <div>{subTitle}</div>}
        <div className={numberWrapperStyle}>
          {!!onUpClick && (
            <button
              onClick={onUpClick}
              className={arrowIconButtonStyle}
              type="button"
              aria-label="Increase value"
            >
              <IconArrowUp
                size={24}
                color={
                  props.disabled
                    ? NUMBER_INPUT_COLOR.disabled
                    : errormessage
                      ? NUMBER_INPUT_COLOR.error
                      : NUMBER_INPUT_COLOR[variant]
                }
              />
            </button>
          )}
          <input
            onChange={onChange}
            value={value}
            type="number"
            className={numberInputStyle({
              color: props.disabled ? 'disabled' : errormessage ? 'error' : variant,
            })}
            {...props}
          />
          {!!onDownClick && (
            <button
              type="button"
              onClick={onDownClick}
              className={arrowIconButtonStyle}
              aria-label="Decrease value"
            >
              <IconArrowDown
                size={24}
                color={
                  props.disabled
                    ? NUMBER_INPUT_COLOR.disabled
                    : errormessage
                      ? NUMBER_INPUT_COLOR.error
                      : NUMBER_INPUT_COLOR[variant]
                }
              />
            </button>
          )}
        </div>
      </div>
      {(errormessage || description) && (
        <div
          className={textMetaStyle({
            color: props.disabled ? 'disabled' : errormessage ? 'error' : variant,
          })}
        >
          {!props.disabled && errormessage ? errormessage : description}
        </div>
      )}
    </div>
  )
}
