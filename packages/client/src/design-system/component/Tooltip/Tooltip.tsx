import { PropsWithChildren } from 'react'
import {
   Tooltip as AriaTooltip,
   OverlayArrow,
   TooltipTrigger,
} from 'react-aria-components'

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
