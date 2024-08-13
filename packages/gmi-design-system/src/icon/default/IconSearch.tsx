import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconSearch(
  {
    title = 'IconSearch',
    titleId = 'GDS-IconSearch',
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
      viewBox="0 0 30 31"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill={color}
        d="M19.376 18h-.988l-.35-.337a8.13 8.13 0 0 0 1.85-6.675c-.587-3.475-3.487-6.25-6.987-6.675a8.13 8.13 0 0 0-9.088 9.088c.425 3.5 3.2 6.4 6.675 6.987a8.13 8.13 0 0 0 6.675-1.85l.338.35v.988l5.312 5.312a1.32 1.32 0 0 0 1.863 0 1.32 1.32 0 0 0 0-1.862zm-7.5 0a5.617 5.617 0 0 1-5.625-5.624 5.617 5.617 0 0 1 5.625-5.625 5.617 5.617 0 0 1 5.625 5.625A5.617 5.617 0 0 1 11.876 18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSearch)
export { ForwardRef as IconSearch }
