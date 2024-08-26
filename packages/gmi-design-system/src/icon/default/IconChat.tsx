import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconChat(
  {
    title = 'IconChat',
    titleId = 'GDS-IconChat',
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
          fill={color}
          d="M13.332 4.003h-.667v5.333c0 .367-.3.667-.666.667h-8v.666c0 .734.6 1.334 1.333 1.334h6.667l2.666 2.666V5.336c0-.733-.6-1.333-1.333-1.333m-2 3.333V2.669c0-.733-.6-1.333-1.333-1.333H2.665c-.733 0-1.333.6-1.333 1.333v8.667l2.667-2.667h6c.733 0 1.333-.6 1.333-1.333"
        />
      </g>
      <defs>
        <clipPath id={titleId}>
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconChat)
export { ForwardRef as IconChat }
