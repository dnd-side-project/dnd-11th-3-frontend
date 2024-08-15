import { PropsWithChildren, useRef } from 'react'
import {
   Tooltip as AriaTooltip,
   OverlayArrow,
   TooltipTrigger,
} from 'react-aria-components'
// import { useTooltipTrigger } from 'react-aria'
import { useTooltipTriggerState } from 'react-stately'
// import { tooltipWrapperStyle } from './tooltip.css'

export interface TooltipProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant: 'default' | 'outlined'
   size: 'small' | 'medium' | 'large'
   children?: React.ReactNode
   disabled?: boolean
}

export function Tooltip({
   children,
   // size,
   // disabled,
   // variant = 'default',
   // ...props
}: PropsWithChildren<TooltipProps>) {
   // let state = useTooltipTriggerState()
   // let ref = useRef(null)
   // let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref)
   return (
      <TooltipTrigger>
         <AriaTooltip>
            <OverlayArrow>
               <svg width={8} height={8} viewBox="0 0 8 8">
                  <path d="M0 0 L4 4 L8 0" />
               </svg>
            </OverlayArrow>
            {children}
         </AriaTooltip>
      </TooltipTrigger>
   )
}
