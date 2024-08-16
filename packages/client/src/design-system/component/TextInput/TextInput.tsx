import { cloneElement, ReactElement, ReactNode } from 'react'

import {
   textInputLabelContainerStyle,
   textInputLabelStyle,
   textInputStyle,
   textInputWrapperStyle,
   textMetaStyle,
   INPUT_COLOR,
} from './textInput.css'

export interface TextInputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: ReactNode
   description?: string
   errorMessage?: string
   icon?: ReactElement
   variant?: 'default' | 'filled'
}

export function TextInput({
   label,
   description,
   errorMessage,
   variant = 'default',
   icon,
   ...props
}: TextInputProps) {
   const Icon = icon
   return (
      <div className={textInputLabelContainerStyle}>
         {label && <div className={textInputLabelStyle}>{label}</div>}
         <div
            className={textInputWrapperStyle({
               color: props.disabled
                  ? 'disabled'
                  : errorMessage
                    ? 'error'
                    : variant,
            })}
         >
            <input
               className={textInputStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errorMessage
                       ? 'error'
                       : variant,
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
         {(errorMessage || description) && (
            <div
               className={textMetaStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errorMessage
                       ? 'error'
                       : variant,
               })}
            >
               {!props.disabled && errorMessage ? errorMessage : description}
            </div>
         )}
      </div>
   )
}
