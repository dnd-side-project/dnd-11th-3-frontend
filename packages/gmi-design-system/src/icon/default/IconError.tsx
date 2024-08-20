import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconError(
  {
    title = 'IconError',
    titleId = 'GDS-IconError',
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
      viewBox="0 0 15 15"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill={color}
        d="M7.5 4.375c.344 0 .625.281.625.625v2.5a.627.627 0 0 1-.625.625.627.627 0 0 1-.625-.625V5c0-.344.281-.625.625-.625M7.494 1.25c-3.45 0-6.244 2.8-6.244 6.25s2.794 6.25 6.244 6.25c3.456 0 6.256-2.8 6.256-6.25s-2.8-6.25-6.256-6.25M7.5 12.5c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5m.625-1.875h-1.25v-1.25h1.25z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconError)
export { ForwardRef as IconError }
