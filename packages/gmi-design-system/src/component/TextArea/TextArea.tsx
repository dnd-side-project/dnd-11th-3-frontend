import { CSSProperties, ReactNode } from 'react'

import {
  textAreaStyle,
  textAreaLabelContainerStyle,
  textAreaLabelStyle,
  textAreaWrapperStyle,
  textMetaStyle,
} from './textarea.css'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode
  description?: string
  errormessage?: string
  height?: CSSProperties['height']
}

export function TextArea({ label, description, errormessage, height, ...props }: TextAreaProps) {
  return (
    <div className={textAreaLabelContainerStyle}>
      {label && <div className={textAreaLabelStyle}>{label}</div>}
      <div
        style={{
          height: height ?? 'auto',
        }}
        className={textAreaWrapperStyle({
          color: props.disabled ? 'disabled' : errormessage ? 'error' : 'default',
        })}
      >
        <textarea
          className={textAreaStyle({
            color: props.disabled ? 'disabled' : errormessage ? 'error' : 'default',
          })}
          {...props}
        />
      </div>
      {(errormessage || description) && (
        <div
          className={textMetaStyle({
            color: props.disabled ? 'disabled' : errormessage ? 'error' : 'default',
          })}
        >
          {!props.disabled && errormessage ? errormessage : description}
        </div>
      )}
    </div>
  )
}
