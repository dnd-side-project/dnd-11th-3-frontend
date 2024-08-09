import React from 'react'
import { type ComponentProps } from 'react'
import { Container, backgroundStyle } from './Layout.css'
import FrameNavigator from '../Nav/FrameNavigator'

interface FrameProps extends ComponentProps<'div'> {
   children: React.ReactNode
}

function Frame({ children }: FrameProps) {
   return (
      <div className={backgroundStyle}>
         <div className={Container}>
            <span>header</span>
            {children}
            <FrameNavigator />
         </div>
      </div>
   )
}
export default Frame
