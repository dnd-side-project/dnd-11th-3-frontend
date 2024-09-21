import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconCircleClose(
   {
      title = 'IconCircleClose',
      titleId = 'GDS-IconCircleClose',
      size = 20,
      color = '#c8c8c8',
      ...props
   }: SVGProps<SVGSVGElement> & IconProps,
   ref: Ref<SVGSVGElement>,
) {
   return (
      <svg
         width={size}
         height={size}
         fill="none"
         viewBox="0 0 20 21"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <g clipPath="url(#a)">
            <path
               fill={color}
               d="M10 2.167A8.326 8.326 0 0 0 1.667 10.5 8.326 8.326 0 0 0 10 18.833a8.326 8.326 0 0 0 8.333-8.333A8.326 8.326 0 0 0 10 2.167m3.583 11.916a.83.83 0 0 1-1.175 0L10 11.675l-2.408 2.408a.83.83 0 1 1-1.175-1.175L8.825 10.5 6.417 8.092a.83.83 0 1 1 1.175-1.175L10 9.325l2.408-2.408a.83.83 0 1 1 1.175 1.175L11.175 10.5l2.408 2.408a.845.845 0 0 1 0 1.175"
            />
         </g>
         <defs>
            <clipPath id="a">
               <path fill="#fff" d="M0 .5h20v20H0z" />
            </clipPath>
         </defs>
      </svg>
   )
}
const ForwardRef = forwardRef(IconCircleClose)
export { ForwardRef as IconCircleClose }
