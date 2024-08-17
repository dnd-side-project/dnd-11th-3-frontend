import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconEdit(
   {
      title = 'IconEdit',
      titleId = 'GDS-IconEdit',
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
         viewBox="0 0 30 30"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <path
            fill={color}
            d="M7.216 23.03h1.551l9.557-9.57-1.551-1.553-9.557 9.57zm15.845-11.178-4.71-4.66 1.552-1.554A2.13 2.13 0 0 1 21.468 5q.928 0 1.565.638l1.551 1.553a2.2 2.2 0 0 1 .665 1.54q.027.901-.61 1.54zM6.108 25.25q-.471 0-.789-.32A1.07 1.07 0 0 1 5 24.14v-3.134a1.15 1.15 0 0 1 .332-.805L16.745 8.773l4.709 4.715-11.413 11.43a1.1 1.1 0 0 1-.803.332zm11.44-12.566-.775-.777 1.55 1.554z"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(IconEdit)
export { ForwardRef as IconEdit }
