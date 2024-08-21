import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconNavbarChat(
   {
      title = 'IconNavbarChat',
      titleId = 'GDS-IconNavbarChat',
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
         viewBox="0 0 32 32"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.5 26A9.5 9.5 0 1 0 6 16.5a9.46 9.46 0 0 0 1.056 4.357L6 26l5.143-1.056A9.46 9.46 0 0 0 15.5 26"
         />
         <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth={2}
            d="M12.071 14.125h6.861M12.071 18.697h4.574"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(IconNavbarChat)
export { ForwardRef as IconNavbarChat }
