import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconClose(
  {
    title = 'IconClose',
    titleId = 'GDS-IconClose',
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
          d="M12.2 3.807a.664.664 0 0 0-.94 0L8 7.06 4.74 3.8a.664.664 0 1 0-.94.94L7.06 8 3.8 11.26a.664.664 0 1 0 .94.94L8 8.94l3.26 3.26a.664.664 0 1 0 .94-.94L8.94 8l3.26-3.26a.67.67 0 0 0 0-.933"
        />
      </g>
    </svg>
  )
}
const ForwardRef = forwardRef(IconClose)
export { ForwardRef as IconClose }
