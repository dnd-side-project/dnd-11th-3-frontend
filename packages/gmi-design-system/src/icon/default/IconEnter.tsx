import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'
const IconEnter = (
  {
    title = 'IconEnter',
    titleId = 'GDS-IconEnter',
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
    viewBox="0 0 15 15"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        fill={color}
        d="M11.931 9.319 9.07 12.18a.63.63 0 0 1-.888 0 .63.63 0 0 1 0-.887l1.8-1.794H3.625A.627.627 0 0 1 3 8.875v-6.25C3 2.281 3.281 2 3.625 2s.625.281.625.625V8.25h5.731l-1.8-1.794a.63.63 0 0 1 0-.887.63.63 0 0 1 .888 0L11.93 8.43a.63.63 0 0 1 0 .888"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(IconEnter)
export { ForwardRef as IconEnter }
