import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function IconProfile(
  {
    title = 'IconProfile',
    titleId = 'GDS-IconProfile',
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
      <rect width={31.333} height={31.333} x={0.333} y={0.333} fill="#FFE1B5" rx={7.667} />
      <rect
        width={31.333}
        height={31.333}
        x={0.333}
        y={0.333}
        stroke="#EFEFEF"
        strokeWidth={0.667}
        rx={7.667}
      />
      <g clipPath="url(#a)">
        <path
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={0.261}
          d="M7.303 31.525c.56-3.209 3.081-9.765 8.575-10.167 7.925-.58 10.573 7.48 10.94 11.21.456 4.634-20.432 4.204-19.515-1.043Z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={0.261}
          d="M14.41 26.297a20.2 20.2 0 0 0-2.46 6.597M21.523 25.008c.53.759 1.14 1.8 1.611 3.118.747 2.093.807 3.948.747 5.129"
        />
        <path
          fill="#fff"
          stroke={color}
          strokeWidth={0.195}
          d="M20.34 21.38c.203 1.18-.864 2.39-2.445 2.663s-2.992-.507-3.196-1.687.863-2.39 2.444-2.663 2.992.508 3.196 1.688Z"
        />
        <path
          fill="#fff"
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={0.261}
          d="M23.878 10.12c-.444-.409-1.032.237-2.174-.29-.377-.174-2.9-4.87-9.104-2.918C9.4 7.918 6.018 12.295 7.526 17.6c1.235 4.347 6.363 6.147 9.945 5.248 8.553-2.145 8.334-10.954 6.407-12.728Z"
        />
        <path
          fill="#fff"
          d="M10.166 18.197c-.13.17-.739.963-1.668 1.045-1.344.119-2.731-1.303-2.897-2.834-.187-1.719.808-3.236 2.221-3.39 1.118-.12 2.013.828 2.131.958"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={0.261}
          d="M10.166 18.197c-.13.17-.739.963-1.668 1.045-1.344.119-2.731-1.303-2.897-2.834-.187-1.719.808-3.236 2.221-3.39 1.118-.12 2.013.828 2.131.958"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={0.261}
          d="M6.543 15.853a2.8 2.8 0 0 1 1.343-.483c.794-.07 1.39.223 1.614.348"
        />
        <path
          fill={color}
          d="M17.804 12.647a.616.616 0 1 0 0-1.233.616.616 0 0 0 0 1.233M19.652 11.717a.616.616 0 1 0 0-1.232.616.616 0 0 0 0 1.232"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={0.261}
          d="M17.555 11.01a1.9 1.9 0 0 0-.735.114M18.95 10.16c.085-.17.231-.384.373-.535"
        />
        <path
          fill={color}
          d="M14.766 8.866c.306.239.682.37 1.07.376.377.005.753-.11 1.062-.326s.574-.531.662-.906a1.2 1.2 0 0 0-.004-.557 1.36 1.36 0 0 0-.278-.516c-.23-.284-.565-.568-.957-.507-.324.051-.526.37-.524.682.002.388.273.72.56.952.31.251.687.429 1.09.447.39.017.784-.119 1.092-.356q.232-.179.41-.412a1.5 1.5 0 0 0 .257-.507q.035-.135.035-.274c0-.057-.05-.112-.109-.11-.058.004-.11.049-.109.11a1 1 0 0 1-.003.092l-.001.012q-.002.021 0 0c-.003.042-.015.085-.026.125q-.017.06-.04.118l-.004.008c.006-.013 0 0-.001.003l-.015.032a1.5 1.5 0 0 1-.172.281c-.012.017-.002.003 0 0l-.028.035a2 2 0 0 1-.3.296l-.01.008c-.015.012.01-.008 0 0a1.8 1.8 0 0 1-.344.204l-.017.007.005-.002-.03.012a1.6 1.6 0 0 1-.326.088l-.011.002q-.016.002-.031.003a1.5 1.5 0 0 1-.34-.003l-.012-.002a1 1 0 0 1-.103-.02 2 2 0 0 1-.268-.087c.02.008.005.002 0 0l-.029-.013a2 2 0 0 1-.296-.17l-.078-.055c-.003-.002-.018-.014-.007-.006l-.01-.008a2 2 0 0 1-.308-.302l-.008-.01c-.01-.013.01.014 0 0l-.038-.053a1 1 0 0 1-.095-.168l-.007-.016c.001.003.008.02 0 .001l-.012-.032a1 1 0 0 1-.038-.148l-.003-.015.001.007a1 1 0 0 1-.002-.132l.002-.014c0-.004.003-.025 0-.006l.002-.014a.6.6 0 0 1 .034-.121c.01-.023-.007.015.001-.002l.012-.024.022-.04c.008-.012.025-.03.029-.043 0 0-.014.018-.007.01q.004-.007.008-.01a1 1 0 0 1 .065-.067l.01-.008c.008-.007.008 0-.007.006.013-.005.027-.02.04-.027l.039-.021.02-.01c-.026.016-.003.002.007-.001.03-.011.063-.013.093-.023-.023.007-.018.002-.01.001h.014a1 1 0 0 1 .077-.001l.026.002c.015.001-.022-.003-.008 0h.012a1 1 0 0 1 .113.03l.028.011c.015.006-.016-.007-.002 0l.02.009a1 1 0 0 1 .165.097l.025.019c-.017-.013-.004-.003 0 0l.017.014q.05.04.097.087.095.094.178.2l.02.024-.003-.004.011.015a1.3 1.3 0 0 1 .107.173q.016.03.028.06a1.167 1.167 0 0 1 .063.221l.005.03c0-.004-.003-.025-.001-.005l.002.016a1 1 0 0 1-.001.212l-.002.016c-.002.016.004-.027 0 0a1.2 1.2 0 0 1-.065.241l-.004.01a1 1 0 0 1-.041.088 1.3 1.3 0 0 1-.106.17l-.022.029-.01.012a1.7 1.7 0 0 1-.27.268l-.01.008c.017-.014.005-.004.001-.001l-.024.018a1.8 1.8 0 0 1-.329.189l-.012.004a1.7 1.7 0 0 1-.388.107l-.011.002-.02.002a1.8 1.8 0 0 1-.39 0l-.013-.002h.003q-.033-.003-.065-.01a1.7 1.7 0 0 1-.312-.086l-.028-.011c-.005-.002-.02-.009.002 0l-.016-.007a1.6 1.6 0 0 1-.304-.175l-.013-.01c-.024-.018-.046-.031-.077-.031a.1.1 0 0 0-.077.032c-.036.038-.048.116 0 .153"
        />
        <path
          fill="#fff"
          stroke={color}
          strokeMiterlimit={10}
          strokeWidth={0.26}
          d="M23.674 8.19c.001.065-.084.091-.12.036l-.911-1.417a.07.07 0 0 0-.05-.03L21.263 6.7a.065.065 0 0 1-.035-.116l1.063-.801a.07.07 0 0 0 .025-.053l-.024-1.685c0-.065.084-.09.12-.036l.911 1.417q.019.028.051.03l1.328.08c.06.003.083.08.035.116l-1.062.8a.07.07 0 0 0-.026.053zM5.73 28.076c0 .065-.084.09-.12.035l-.532-.827a.07.07 0 0 0-.051-.03l-.774-.046a.065.065 0 0 1-.036-.117l.62-.467a.07.07 0 0 0 .026-.052l-.015-.985c0-.065.085-.09.12-.036l.533.828c.01.017.03.028.05.03l.775.046c.06.004.083.08.035.117l-.62.466a.07.07 0 0 0-.025.053z"
        />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth={0.26}
          d="M6.665 24.97c.16-.252.73-.927 1.717-1.606M6.067 24.529c.122-.227.55-.815 1.296-1.355"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M1.816 2.398h28.43v29.598H1.816z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(IconProfile)
export { ForwardRef as IconProfile }
