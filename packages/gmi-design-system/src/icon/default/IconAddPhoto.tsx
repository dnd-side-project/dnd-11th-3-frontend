import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconAddPhoto(
  {
    title = 'IconAddPhoto',
    titleId = 'GDS-IconAddPhoto',
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
      viewBox="0 0 32 32"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g clipPath="url(#a)">
        <path
          fill="#616161"
          d="M28.027 6.664h-2.694V3.971c0-.72-.586-1.307-1.306-1.307h-.04c-.734 0-1.32.587-1.32 1.307v2.693h-2.68c-.72 0-1.307.587-1.32 1.307v.04c0 .733.586 1.32 1.32 1.32h2.68v2.68c0 .72.586 1.32 1.32 1.306h.04c.72 0 1.306-.586 1.306-1.306V9.33h2.694c.72 0 1.306-.587 1.306-1.307v-.053c0-.72-.586-1.307-1.306-1.307m-6.694 5.347v-1.347h-1.346c-.707 0-1.374-.28-1.88-.773a2.7 2.7 0 0 1-.774-1.92c0-.48.134-.92.36-1.307H6.667A2.675 2.675 0 0 0 4 9.331v16c0 1.466 1.2 2.666 2.667 2.666h16c1.466 0 2.666-1.2 2.666-2.666V14.29a2.73 2.73 0 0 1-1.36.373 2.666 2.666 0 0 1-2.64-2.653m-.053 13.32H8a.666.666 0 0 1-.533-1.067l2.64-3.507a.674.674 0 0 1 1.093.027l2.133 3.213 3.48-4.64a.664.664 0 0 1 1.054-.013l3.933 4.907a.664.664 0 0 1-.52 1.08"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconAddPhoto)
export { ForwardRef as IconAddPhoto }
