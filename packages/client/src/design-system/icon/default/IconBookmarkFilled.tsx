import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconBookmarkFilled(
   {
      title = 'IconBookmarkFilled',
      titleId = 'GDS-IconBookmarkFilled',
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
         viewBox="0 0 15 16"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <g clipPath="url(#a)">
            <path
               fill={color}
               d="M10.625 2.375h-6.25c-.687 0-1.25.563-1.25 1.25v10L7.5 11.75l4.375 1.875v-10c0-.687-.562-1.25-1.25-1.25"
            />
         </g>
         <defs>
            <clipPath id="a">
               <path fill="#fff" d="M0 .5h15v15H0z" />
            </clipPath>
         </defs>
      </svg>
   )
}
const ForwardRef = forwardRef(IconBookmarkFilled)
export { ForwardRef as IconBookmarkFilled }
