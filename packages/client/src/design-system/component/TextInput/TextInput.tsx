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

export interface TextInputProps
   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
   label?: ReactNode
   description?: string
   errormessage?: string
   successMessage?: string
   icon?: ReactElement
   variant?: 'default' | 'filled'
   required?: boolean
   size?: 'medium' | 'large'
}

export function TextInput({
   label,
   description,
   errormessage,
   successMessage,
   variant = 'default',
   icon,
   required = false,
   size = 'large',
   ...props
}: TextInputProps) {
   const Icon = icon
   return (
      <>
         <div className={textInputContainerStyle}>
            {label && (
               <div className={textInputLabelStyle}>
                  {label}
                  {required && <span className={asteriskStyle}>*</span>}
               </div>
            )}

            <div
               className={textInputWrapperStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errormessage
                       ? 'error'
                       : variant,
                  size,
               })}
            >
               <input
                  className={textInputStyle({
                     color: props.disabled
                        ? 'disabled'
                        : errormessage
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
                        : errormessage
                          ? INPUT_COLOR.error
                          : INPUT_COLOR.default,
                  })}
            </div>
            <div
               className={textMetaStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errormessage
                       ? 'error'
                       : successMessage
                         ? 'success'
                         : variant,
               })}
            >
               {(errormessage || successMessage || description) &&
               !props.disabled &&
               errormessage
                  ? errormessage
                  : successMessage || description}
            </div>
         </div>
      </>
   )
}
