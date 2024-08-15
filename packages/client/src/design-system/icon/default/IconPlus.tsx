import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconPlus(
   {
      title = 'IconPlus',
      titleId = 'GDS-IconPlus',
      size = 24,
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
         viewBox="0 0 24 24"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <g clipPath="url(#a)">
            <path
               fill="#fff"
               d="M19.25 13H13v6.25c0 .688-.562 1.25-1.25 1.25s-1.25-.562-1.25-1.25V13H4.25C3.563 13 3 12.438 3 11.75s.563-1.25 1.25-1.25h6.25V4.25c0-.687.563-1.25 1.25-1.25S13 3.563 13 4.25v6.25h6.25c.688 0 1.25.563 1.25 1.25S19.938 13 19.25 13"
            />
         </g>
         <defs>
            <clipPath id="a">
               <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
         </defs>
      </svg>
   )
}
const ForwardRef = forwardRef(IconPlus)
export { ForwardRef as IconPlus }
