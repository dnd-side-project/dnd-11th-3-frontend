import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'
const IconArrowRight = (
  {
    title = 'IconArrowRight',
    titleId = 'GDS-IconArrowRight',
    size = 20,
    color = '#2A2A2A',
    ...props
  }: SVGProps<SVGSVGElement> & IconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 18 18"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#25E3C0"
      d="m5.134 4.172 4.85 4.85-4.85 4.85a1.245 1.245 0 0 0 0 1.762 1.245 1.245 0 0 0 1.763 0l5.737-5.737a1.245 1.245 0 0 0 0-1.763L6.897 2.397a1.245 1.245 0 0 0-1.763 0c-.475.487-.487 1.287 0 1.775"
    />
  </svg>
)
const ForwardRef = forwardRef(IconArrowRight)
export { ForwardRef as IconArrowRight }
