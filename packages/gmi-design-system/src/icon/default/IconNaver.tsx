import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconNaver(
  {
    title = 'IconNaver',
    titleId = 'GDS-IconNaver',
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
      viewBox="0 0 17 16"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#a)">
        <path fill="#fff" d="M11.35 8.563 5.416 0H.5v16h5.15V7.436L11.584 16H16.5V0h-5.15z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h16v16H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconNaver)
export { ForwardRef as IconNaver }
