import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconAlarm(
   {
      title = 'IconAlarm',
      titleId = 'GDS-IconAlarm',
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
            d="M15 27.5c1.03 0 1.92-.632 2.302-1.527.216-.508-.25-.973-.802-.973h-3c-.552 0-1.018.465-.802.973A2.51 2.51 0 0 0 15 27.5m7.793-7.207a1 1 0 0 1-.293-.707V13.75c0-3.558-1.751-6.579-4.866-7.677-.437-.155-.759-.55-.759-1.014V5A1.87 1.87 0 0 0 15 3.125 1.87 1.87 0 0 0 13.125 5v.06c0 .463-.322.859-.758 1.013C9.262 7.171 7.5 10.181 7.5 13.75v5.836a1 1 0 0 1-.293.707L5.26 22.24a.884.884 0 0 0 .625 1.509h18.232a.884.884 0 0 0 .625-1.509zM20 20.25a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6.5c0-3.1 1.887-5.625 5-5.625s5 2.525 5 5.625z"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(IconAlarm)
export { ForwardRef as IconAlarm }
