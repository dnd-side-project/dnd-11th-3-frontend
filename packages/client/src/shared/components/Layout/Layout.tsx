import React from 'react'
import { type ComponentProps } from 'react'
import { Container, backgroundStyle } from './Layout.css'
import FrameNavigator from '../Nav/FrameNavigator'
import FrameHeader from '../Header/FrameHeader'

interface FrameProps extends ComponentProps<'div'> {
   children: React.ReactNode
}

function Frame({ children }: FrameProps) {
   return (
      <div className={backgroundStyle}>
         <div className={Container}>
            <FrameHeader />
            {children}
            <FrameNavigator />
         </div>
      </div>
   )
}
export default Frame
