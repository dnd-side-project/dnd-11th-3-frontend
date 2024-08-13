import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconHuman(
   {
      title = 'IconHuman',
      titleId = 'GDS-IconHuman',
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
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 25.975a8.1 8.1 0 0 1 8.1-8.1h2.025a8.1 8.1 0 0 1 8.1 8.1A2.025 2.025 0 0 1 23.2 28H9.025A2.025 2.025 0 0 1 7 25.975Z"
         />
         <path
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M9.076 10.351c.221-.385.78-.069 1.464-.694.226-.207.947-4.044 5.747-4.093 2.475-.026 5.834 2.25 5.963 6.28.106 3.3-3.096 5.714-5.816 5.902-6.494.448-8.315-5.725-7.358-7.395Z"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(IconHuman)
export { ForwardRef as IconHuman }
