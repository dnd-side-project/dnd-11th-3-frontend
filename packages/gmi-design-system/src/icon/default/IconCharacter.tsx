import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconCharacter(
  {
    title = 'IconCharacter',
    titleId = 'GDS-IconCharacter',
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
      viewBox="0 0 144 150"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g
        clipPath={`
               url(#${titleId})`}
      >
        <path
          fill="#231815"
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.323}
          d="M27.86 147.542c2.835-16.261 15.589-49.487 43.381-51.524 40.091-2.939 53.487 37.908 55.344 56.813 2.308 23.48-103.363 21.301-98.726-5.289Z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.323}
          d="M63.81 121.062a102.5 102.5 0 0 0-12.45 33.436M99.793 114.531a66.8 66.8 0 0 1 8.148 15.804c3.778 10.607 4.083 20.009 3.781 25.99"
        />
        <path
          fill="#fff"
          stroke={color}
          strokeWidth={0.987}
          d="M94.028 96.182c1.035 5.984-4.375 12.113-12.393 13.499-8.017 1.386-15.17-2.572-16.205-8.556s4.375-12.113 12.393-13.499 15.171 2.572 16.205 8.556Z"
        />
        <path
          fill="#fff"
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.323}
          d="M111.723 39.061c-2.248-2.072-5.223 1.203-11.001-1.469-1.906-.881-14.667-24.684-46.054-14.791C38.484 27.902 21.373 50.08 29 76.97c6.248 22.028 32.189 31.148 50.308 26.595 43.269-10.873 42.165-55.512 32.415-64.504Z"
        />
        <path
          fill="#fff"
          d="M42.344 80.032c-.661.864-3.74 4.88-8.441 5.297-6.797.603-13.816-6.603-14.656-14.362-.944-8.71 4.088-16.401 11.239-17.178 5.654-.615 10.183 4.195 10.779 4.851"
        />
        <path
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.323}
          d="M42.344 80.032c-.661.864-3.74 4.88-8.441 5.297-6.797.603-13.816-6.603-14.656-14.362-.944-8.71 4.088-16.401 11.239-17.178 5.654-.615 10.183 4.195 10.779 4.851"
        />
        <path
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.323}
          d="M24.012 68.15a14.25 14.25 0 0 1 6.796-2.449c4.017-.35 7.03 1.13 8.164 1.764M49.34 41.31c.57.506 5.92 5.558 13.168 3.413 8.604-2.547 11.476-11.983 11.62-12.767 2.034-11.106-3.458-23.46-9.681-20.717-7.334 3.232-1.76 16.776 8.947 20.62 7.49 2.687 17.038-1.711 20.143-10.727"
        />
        <path
          fill="#231815"
          d="M84.662 47.898c.882-.176 1.295-1.839.921-3.713s-1.391-3.251-2.274-3.075c-.882.177-1.295 1.84-.922 3.714.374 1.874 1.392 3.25 2.275 3.074M90.822 46.219c.882-.177 1.295-1.84.922-3.714-.374-1.875-1.392-3.251-2.275-3.075-.882.177-1.295 1.84-.922 3.714.374 1.875 1.392 3.251 2.275 3.075"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth={1.317}
          d="M130.265 43.445c.22 2.414-.724 7.67-6.253 9.38M132.55 52.071c-.099 1.869-1.42 5.775-5.911 6.453M25.975 115.774c.816-1.28 3.698-4.7 8.706-8.147M22.965 113.514c.616-1.15 2.793-4.135 6.573-6.871"
        />
      </g>
      <defs>
        <clipPath id={titleId}>
          <path fill="#fff" d="M.09 0h143.824v150H.09z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconCharacter)
export { ForwardRef as IconCharacter }
