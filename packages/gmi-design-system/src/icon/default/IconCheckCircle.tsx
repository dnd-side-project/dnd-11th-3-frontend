import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconCheckCircle(
  {
    title = 'IconCheckCircle',
    titleId = 'GDS-IconCheckCircle',
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
      viewBox="0 0 16 16"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M7.999 1.336a6.67 6.67 0 0 0-6.667 6.667 6.67 6.67 0 0 0 6.667 6.666 6.67 6.67 0 0 0 6.666-6.666A6.67 6.67 0 0 0 8 1.336m-1.807 9.527L3.799 8.469a.664.664 0 1 1 .94-.94l1.926 1.92 4.587-4.586a.664.664 0 1 1 .94.94l-5.06 5.06a.664.664 0 0 1-.94 0"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckCircle)
export { ForwardRef as IconCheckCircle }
