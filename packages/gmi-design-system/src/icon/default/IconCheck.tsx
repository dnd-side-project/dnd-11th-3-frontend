import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconCheck(
  {
    title = 'IconCheck',
    titleId = 'GDS-IconCheck',
    size = 17,
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
      viewBox="0 0 16 15"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="M8 1.25c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25S11.45 1.25 8 1.25M8 12.5c-2.756 0-5-2.244-5-5s2.244-5 5-5 5 2.244 5 5-2.244 5-5 5m2.425-7.319L6.75 8.856 5.575 7.681a.622.622 0 1 0-.881.882l1.619 1.618a.623.623 0 0 0 .88 0l4.12-4.118a.623.623 0 0 0 0-.882.63.63 0 0 0-.888 0"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h15v15H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheck)
export { ForwardRef as IconCheck }
