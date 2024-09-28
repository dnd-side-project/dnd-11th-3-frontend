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
   submitSendMessage: (data: string) => void
}

function ChatInput({ input, setChatInput, submitSendMessage }: Props) {
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

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      submitSendMessage(input)
   }

   return (
      <div className={chatInputBottom}>
         <form onSubmit={handleSubmit} className={textInputContainerStyle}>
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
               <button type="submit" aria-label="send">
                  <IconSend
                     size={28}
                     color={
                        isFocused ? color['primary-main'] : color['gray-400']
                     }
                  />
               </button>
            </div>
         </form>
      </div>
   )
}

export default ChatInput
