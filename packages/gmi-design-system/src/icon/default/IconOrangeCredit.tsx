import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'
const IconOrangeCredit = (
  {
    title = 'IconOrangeCredit',
    titleId = 'GDS-IconOrangeCredit',
    size = 10,
    color = '#2A2A2A',
    ...props
  }: SVGProps<SVGSVGElement> & IconProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 10 10"
    color={color}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={5} cy={5} r={5} fill="#fff" />
    <path
      fill="#FFAB35"
      d="M6.258 4.113a1.12 1.12 0 0 0-.403-.735q-.33-.27-.832-.273a1.4 1.4 0 0 0-.773.222q-.328.22-.508.641-.18.418-.18 1.004 0 .598.18 1.015.184.42.508.633.328.215.766.22.488-.006.824-.259.336-.258.418-.71l1.187.007a2.2 2.2 0 0 1-.379.992q-.313.458-.843.735A2.64 2.64 0 0 1 5 7.878q-.761 0-1.36-.344a2.4 2.4 0 0 1-.933-1.004q-.34-.66-.34-1.558 0-.902.34-1.559.345-.655.941-1A2.64 2.64 0 0 1 5 2.066q.652 0 1.18.242.526.242.855.703.332.46.41 1.101z"
    />
  </svg>
)
const ForwardRef = forwardRef(IconOrangeCredit)
export { ForwardRef as IconOrangeCredit }
