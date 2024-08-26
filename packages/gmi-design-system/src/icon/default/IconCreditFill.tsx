import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconCreditFill(
  {
    title = 'IconCreditFill',
    titleId = 'GDS-IconCreditFill',
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
      viewBox="0 0 20 20"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={20} height={20} fill={color} rx={10} />
      <path
        fill="#fff"
        d="M12.588 8.438c-.205-1.19-1.162-1.874-2.365-1.874-1.627 0-2.762 1.245-2.762 3.487 0 2.27 1.148 3.486 2.762 3.486 1.175 0 2.132-.656 2.365-1.818h1.79c-.273 1.9-1.831 3.418-4.183 3.418-2.611 0-4.525-1.9-4.525-5.086 0-3.2 1.941-5.086 4.525-5.086 2.188 0 3.883 1.271 4.184 3.473z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCreditFill)
export { ForwardRef as IconCreditFill }
