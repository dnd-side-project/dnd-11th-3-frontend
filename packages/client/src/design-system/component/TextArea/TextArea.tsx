import { CSSProperties } from 'react'
import {
   textAreaStyle,
   textAreaLabelContainerStyle,
   textAreaLabelStyle,
   textAreaWrapperStyle,
   textMetaStyle,
} from './textarea.css'

export interface TextAreaProps
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   label?: string
   description?: string
   errorMessage?: string
   height?: CSSProperties['height']
}

export function TextArea({
   label,
   description,
   errorMessage,
   height,
   ...props
}: TextAreaProps) {
   return (
      <div className={textAreaLabelContainerStyle}>
         {label && <div className={textAreaLabelStyle}>{label}</div>}
         <div
            style={{
               height: height ?? 'auto',
            }}
            className={textAreaWrapperStyle({
               color: props.disabled
                  ? 'disabled'
                  : errorMessage
                    ? 'error'
                    : 'default',
            })}
         >
            <textarea
               className={textAreaStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errorMessage
                       ? 'error'
                       : 'default',
               })}
               {...props}
            />
         </div>
         {(errorMessage || description) && (
            <div
               className={textMetaStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errorMessage
                       ? 'error'
                       : 'default',
               })}
            >
               {!props.disabled && errorMessage ? errorMessage : description}
            </div>
         )}
      </div>
   )
}
