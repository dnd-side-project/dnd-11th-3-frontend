import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconLogoFilled(
  {
    title = 'IconLogoFilled',
    titleId = 'GDS-IconLogoFilled',
    size = 20,
    color = '#25E3C0',
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
        d="M30 24.07h-8.604V8.55h-2.629v15.52h-5.2c-1.732 0-3.137-1.392-3.137-3.108V6h14.365C27.67 6 30 8.308 30 11.155z"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.138 24.07h4.695V13.288H0v7.674c0 1.717 1.405 3.108 3.138 3.108M0 10.741V6h7.833v4.741z"
        clipRule="evenodd"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogoFilled)
export { ForwardRef as IconLogoFilled }
