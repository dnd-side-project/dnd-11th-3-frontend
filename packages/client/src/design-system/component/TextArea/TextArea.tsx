import { CSSProperties, forwardRef } from 'react'
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

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
   ({ label, description, errorMessage, height, ...props }, ref) => {
      return (
         <div className={textAreaLabelContainerStyle}>
            <div className={textAreaLabelStyle}>{label}</div>
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
                  ref={ref}
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
   },
)
