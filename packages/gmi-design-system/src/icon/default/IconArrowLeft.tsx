import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconArrowLeft(
  {
    title = 'IconArrowLeft',
    titleId = 'GDS-IconArrowLeft',
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
        d="m19.01 20.548-5.556-5.555 5.555-5.555a1.426 1.426 0 0 0 0-2.02 1.426 1.426 0 0 0-2.018 0l-6.572 6.573a1.426 1.426 0 0 0 0 2.018l6.572 6.572c.558.559 1.46.559 2.018 0 .544-.558.559-1.474 0-2.033"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArrowLeft)
export { ForwardRef as IconArrowLeft }
