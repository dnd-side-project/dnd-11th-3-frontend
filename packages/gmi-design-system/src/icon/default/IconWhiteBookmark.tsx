import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'
const IconWhiteBookmark = (
  {
    title = 'IconWhiteBookmark',
    titleId = 'GDS-IconWhiteBookmark',
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
    viewBox="0 0 15 16"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M10.625 2.375h-6.25c-.687 0-1.25.563-1.25 1.25v10L7.5 11.75l4.375 1.875v-10c0-.687-.562-1.25-1.25-1.25m0 9.375L7.5 10.387 4.375 11.75V3.625h6.25z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(IconWhiteBookmark)
export { ForwardRef as IconWhiteBookmark }
