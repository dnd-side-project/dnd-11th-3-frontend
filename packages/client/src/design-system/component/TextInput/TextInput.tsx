import { cloneElement, ReactElement, ReactNode } from 'react'

import { Header } from '@shared/ui'
import {
   textInputLabelContainerStyle,
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
   errorMessage?: string
   icon?: ReactElement
   variant?: 'default' | 'filled'
   required?: boolean
   size?: 'medium' | 'large'
}

export function TextInput({
   label,
   description,
   errorMessage,
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
                  color: props.disabled
                     ? 'disabled'
                     : errorMessage
                       ? 'error'
                       : variant,
                  size,
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
            {/* {(errorMessage || description) && ( */}
            <div
               className={textMetaStyle({
                  color: props.disabled
                     ? 'disabled'
                     : errorMessage
                       ? 'error'
                       : variant,
               })}
            >
               {(errorMessage || description) && !props.disabled && errorMessage
                  ? errorMessage
                  : description}
            </div>
            {/* )} */}
         </div>
      </div>
   )
}
