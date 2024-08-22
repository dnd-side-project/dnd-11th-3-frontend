import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconFilter(
  {
    title = 'IconFilter',
    titleId = 'GDS-IconFilter',
    size = 16,
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
          d="M2.3 11.333a.3.3 0 0 0-.3.3v.734a.3.3 0 0 0 .3.3h3.4a.3.3 0 0 0 .3-.3v-.734a.3.3 0 0 0-.3-.3zm0-8a.3.3 0 0 0-.3.3v.734a.3.3 0 0 0 .3.3h6.066a.3.3 0 0 0 .3-.3v-.734a.3.3 0 0 0-.3-.3zM8.366 14a.3.3 0 0 0 .3-.3v-.733a.3.3 0 0 1 .3-.3H13.7a.3.3 0 0 0 .3-.3v-.734a.3.3 0 0 0-.3-.3H8.966a.3.3 0 0 1-.3-.3V10.3a.3.3 0 0 0-.3-.3h-.733a.3.3 0 0 0-.3.3v3.4a.3.3 0 0 0 .3.3zm-3.4-8a.3.3 0 0 0-.3.3v.733a.3.3 0 0 1-.3.3H2.3a.3.3 0 0 0-.3.3v.734a.3.3 0 0 0 .3.3h2.066a.3.3 0 0 1 .3.3V9.7a.3.3 0 0 0 .3.3H5.7a.3.3 0 0 0 .3-.3V6.3a.3.3 0 0 0-.3-.3zM13.7 8.667a.3.3 0 0 0 .3-.3v-.734a.3.3 0 0 0-.3-.3H7.633a.3.3 0 0 0-.3.3v.734a.3.3 0 0 0 .3.3zM10 5.7a.3.3 0 0 0 .3.3h.733a.3.3 0 0 0 .3-.3v-.733a.3.3 0 0 1 .3-.3H13.7a.3.3 0 0 0 .3-.3v-.734a.3.3 0 0 0-.3-.3h-2.067a.3.3 0 0 1-.3-.3V2.3a.3.3 0 0 0-.3-.3H10.3a.3.3 0 0 0-.3.3z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <rect width={16} height={16} fill="#fff" rx={1} />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconFilter)
export { ForwardRef as IconFilter }
