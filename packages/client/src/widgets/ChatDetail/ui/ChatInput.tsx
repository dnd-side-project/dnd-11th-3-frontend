'use client'

import React, { useState } from 'react'
import { IconAddPhoto, IconSend } from '@gds/icon'
import { color } from '@gds/token'
import { addPhotoIconBox, chatInputBottom } from './style.css'
import {
   textInputContainerStyle,
   textInputStyle,
   textInputWrapperStyle,
} from './text.css'

interface Props {
   input: string
   setChatInput: (input: string) => void
}

function ChatInput({ input, setChatInput }: Props) {
   const [isFocused, setIsFocused] = useState(false)

   const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChatInput(event.target.value)
   }

   const handleFocus = () => {
      setIsFocused(true)
   }

   const handleBlur = () => {
      setIsFocused(false)
   }

   return (
      <div className={chatInputBottom}>
         <div className={textInputContainerStyle}>
            <div
               className={textInputWrapperStyle({
                  color: isFocused ? 'filled' : 'default',
               })}
            >
               <div className={addPhotoIconBox}>
                  <IconAddPhoto size={28} />
               </div>
               <input
                  type="text"
                  value={input}
                  onChange={handleOnChangeInput}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={textInputStyle({
                     color: isFocused ? 'filled' : 'default',
                  })}
               />
               <IconSend
                  size={28}
                  color={isFocused ? color['primary-main'] : color['gray-400']}
               />
            </div>
         </div>
      </div>
   )
}

export default ChatInput
