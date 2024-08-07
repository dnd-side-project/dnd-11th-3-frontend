import React from 'react'
import { type ComponentProps } from 'react'
import { Container, backgroundStyle } from './Layout.css'

interface FrameProps extends ComponentProps<'div'> {
   children: React.ReactNode
}

function Frame({ children }: FrameProps) {
   return (
      <div className={backgroundStyle}>
         <div className={Container}>{children}</div>
      </div>
   )
}
export default Frame
