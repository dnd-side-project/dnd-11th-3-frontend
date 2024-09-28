import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconSend(
   {
      title = 'IconSend',
      titleId = 'GDS-IconSend',
      size = 20,
      color = '#949494',
      ...props
   }: SVGProps<SVGSVGElement> & IconProps,
   ref: Ref<SVGSVGElement>,
) {
   return (
      <svg
         width={size}
         height={size}
         fill="none"
         viewBox="0 0 28 28"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <path
            fill={color}
            d="M3 22.685V6.272q0-.695.568-1.058a1.25 1.25 0 0 1 1.2-.11L24.21 13.31q.789.348.789 1.168 0 .821-.79 1.168L4.769 23.853q-.631.252-1.2-.112Q3 23.38 3 22.685m2.525-1.894 14.961-6.313-14.96-6.313v4.42l7.574 1.893-7.575 1.894zm0-6.313V8.165v12.626z"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(IconSend)
export { ForwardRef as IconSend }
