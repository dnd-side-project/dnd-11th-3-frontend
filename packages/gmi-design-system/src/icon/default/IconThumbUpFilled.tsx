import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'
const IconThumbUpFilled = (
  {
    title = 'IconThumbUpFilled',
    titleId = 'GDS-IconThumbUpFilled',
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
    <g fill={color} clipPath="url(#a)">
      <path d="M5.625 13.625h5.625c.519 0 .963-.312 1.15-.762l1.887-4.407q.087-.213.088-.456V6.75c0-.687-.562-1.25-1.25-1.25H9.181l.594-2.856.019-.2a.94.94 0 0 0-.275-.663.937.937 0 0 0-1.322.003l-3.46 3.46a1.24 1.24 0 0 0-.362.881v6.25c0 .688.563 1.25 1.25 1.25m0-7.5 2.713-2.712-.526 2.094a1 1 0 0 0 .97 1.243h4.343V8l-1.875 4.375H5.625zm-5 0h2.5v7.5h-2.5z" />
      <path d="m9 2.5-.5 3v1h5v2l-2 4.5-6-.5v-7z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h15v15H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(IconThumbUpFilled)
export { ForwardRef as IconThumbUpFilled }
