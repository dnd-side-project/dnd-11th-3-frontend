import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconCheckGray(
   {
      title = 'IconCheckGray',
      titleId = 'GDS-IconCheckGray',
      size = 15,
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
         viewBox="0 0 15 15"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <g clipPath="url(#a)">
            <path
               fill={color}
               d="M7.5 1.25c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25m0 11.25c-2.756 0-5-2.244-5-5s2.244-5 5-5 5 2.244 5 5-2.244 5-5 5m2.425-7.319L6.25 8.856 5.075 7.681a.622.622 0 1 0-.881.882l1.619 1.618a.623.623 0 0 0 .88 0l4.12-4.118a.623.623 0 0 0 0-.882.63.63 0 0 0-.888 0"
            />
         </g>
         <defs>
            <clipPath id="a">
               <path fill="#fff" d="M0 0h15v15H0z" />
            </clipPath>
         </defs>
      </svg>
   )
}
const ForwardRef = forwardRef(IconCheckGray)
export { ForwardRef as IconCheckGray }
