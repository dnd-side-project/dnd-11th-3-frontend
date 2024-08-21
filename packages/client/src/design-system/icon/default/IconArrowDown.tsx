import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconArrowDown(
   {
      title = 'IconArrowDown',
      titleId = 'GDS-IconArrowDown',
      size = 20,
      color = '#2A2A2A',
      ...props
   }: SVGProps<SVGSVGElement> & IconProps,
   ref: Ref<SVGSVGElement>,
) {
   return (
      <svg
         width={size}
         height={size}
         fill="none"
         viewBox="0 0 16 16"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <g
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            clipPath="url(#a)"
         >
            <path d="m3 6 5 5M8 11l5-5" />
         </g>
         <defs>
            <clipPath id="down">
               <path fill="#fff" d="M-4-4h24v24H-4z" />
            </clipPath>
         </defs>
      </svg>
   )
}
const ForwardRef = forwardRef(IconArrowDown)
export { ForwardRef as IconArrowDown }
