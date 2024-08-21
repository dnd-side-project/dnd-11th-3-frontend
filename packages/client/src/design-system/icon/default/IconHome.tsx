import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconHome(
   {
      title = 'IconHome',
      titleId = 'GDS-IconHome',
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
            strokeWidth={2}
            d="m23.567 8.503.873-.487-.873.487c1.834 3.284 1.352 7.414-1.183 10.155l.734.679-.734-.68c-.265.288-.556.552-.885.85l-.132.12c-.602.549-1.044 1.195-1.288 1.94h-8.485c-.277-.855-.806-1.571-1.497-2.182l-.656.741.656-.741c-1.402-1.24-2.31-2.603-2.76-4.06-.448-1.455-.46-3.068.027-4.84.955-3.479 3.29-5.588 6.902-6.317 3.68-.743 7.458 1.035 9.3 4.335ZM11.796 22.4h8.062q.01 1.526-.005 3.045c-.01.813-.261 1.378-.617 1.738s-.911.615-1.713.628q-1.718.029-3.426-.001c-.772-.015-1.318-.266-1.673-.625-.356-.36-.606-.914-.62-1.694-.006-.43-.005-.853-.003-1.289l.002-.647q0-.276-.004-.526c-.002-.217-.004-.424-.003-.63Z"
         />
         <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth={2}
            d="M12.564 16.855c1.892.108 5.566-.582 5.134-4.209-.433-3.626-2.882-3.885-3.513-1.619-.81 2.914.703 5.828 5.674 5.828"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(IconHome)
export { ForwardRef as IconHome }
