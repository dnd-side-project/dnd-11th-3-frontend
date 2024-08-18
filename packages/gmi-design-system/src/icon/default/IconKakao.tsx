import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconKakao(
  {
    title = 'IconKakao',
    titleId = 'GDS-IconKakao',
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
      viewBox="0 0 19 18"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#a)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M9.5.602c-4.97 0-9 3.113-9 6.952 0 2.388 1.558 4.493 3.932 5.745l-.999 3.647c-.088.322.28.58.563.392l4.377-2.888q.554.054 1.127.056c4.97 0 9-3.113 9-6.952S14.47.602 9.5.602"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h18v18H.5z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconKakao)
export { ForwardRef as IconKakao }
