import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function PrimarySmile(
  {
    title = 'PrimarySmile',
    titleId = 'GDS-PrimarySmile',
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
      viewBox="0 0 493 493"
      color={color}
      ref={ref}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <rect width={489} height={489} x={2} y={2} fill="#05D3A6" rx={91} />
      <rect width={489} height={489} x={2} y={2} stroke="#000" strokeWidth={4} rx={91} />
      <g clipPath="url(#a)">
        <path
          fill="#231815"
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={4.02}
          d="M112.573 485.536c8.635-49.432 47.476-150.44 132.116-156.633 122.09-8.934 162.887 115.242 168.544 172.714 7.027 71.378-314.782 64.753-300.66-16.081Z"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={4.02}
          d="M222.058 405.039a311.3 311.3 0 0 0-37.917 101.643M331.641 385.188c8.168 11.688 17.568 27.727 24.815 48.042 11.503 32.246 12.432 60.829 11.514 79.011"
        />
        <path
          fill="#fff"
          stroke="#000"
          strokeWidth={3}
          d="M313.412 329.238c3.143 18.18-13.293 36.802-37.652 41.013s-46.093-7.813-49.235-25.994c-3.143-18.181 13.294-36.802 37.652-41.013 24.359-4.21 46.093 7.813 49.235 25.994Z"
        />
        <path
          fill="#fff"
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={4.02}
          d="M367.97 155.751c-6.846-6.302-15.905 3.654-33.501-4.467-5.806-2.68-44.667-75.04-140.255-44.965-49.287 15.508-101.395 82.933-78.168 164.674 19.028 66.965 98.027 94.69 153.209 80.848 131.769-33.054 128.407-168.756 98.715-196.09Z"
        />
        <path
          fill="#fff"
          d="M156.688 280.321c-2.015 2.624-11.391 14.837-25.707 16.103-20.7 1.83-42.075-20.075-44.635-43.663-2.873-26.478 12.451-49.858 34.228-52.221 17.219-1.869 31.014 12.753 32.827 14.749"
        />
        <path
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={4.02}
          d="M156.688 280.321c-2.015 2.624-11.391 14.837-25.707 16.103-20.7 1.83-42.075-20.075-44.635-43.663-2.873-26.478 12.451-49.858 34.228-52.221 17.219-1.869 31.014 12.753 32.827 14.749"
        />
        <path
          stroke="#231815"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={4.02}
          d="M100.863 244.184c3.3-2.263 10.528-6.557 20.696-7.444 12.235-1.068 21.411 3.436 24.865 5.36M247.223 179.203c12.705-5.956 31.969-5.978 28.785-3.176-2.481 2.183-8.834 7.345-14.095 19.256M314.868 149.969c-9.864 2.806-17.976 14.307-13.698 14.442 9.406.298 10.72 1.042 19.951 4.467"
        />
        <path
          fill="#231815"
          d="M179.675 165.537c5.472.505 11.156.069 16.347-1.816 4.939-1.794 9.146-4.826 12.331-9.011 2.964-3.893 4.886-8.834 4.223-13.777-.33-2.461-1.259-4.896-3.204-6.537-1.958-1.652-4.571-2.405-7.068-1.608-2.485.794-4.477 2.948-5.046 5.503-.573 2.573.339 5.166 1.796 7.28 1.408 2.044 3.207 3.773 5.125 5.333 2.132 1.734 4.485 3.168 7.147 3.923 2.626.745 5.425.773 8.067.095 2.646-.678 5.118-2.032 7.319-3.625 2.212-1.601 4.284-3.422 6.212-5.355 1.841-1.846 3.573-3.882 4.848-6.167 1.294-2.319 2.125-4.949 2.051-7.625-.08-2.882-1.253-5.778-3.773-7.352-2.449-1.529-5.486-1.193-7.595.74-1.906 1.747-2.792 4.442-2.747 6.98.047 2.599.966 5.185 2.53 7.256 1.577 2.088 3.653 3.597 6.069 4.577 4.355 1.767 9.48 1.256 13.799-.355 4.804-1.793 8.909-4.981 12.149-8.931a43.5 43.5 0 0 0 4.536-6.729c1.37-2.51 2.603-5.233 3.189-8.046.534-2.564.318-5.766-2.285-7.154-2.393-1.276-5.361-.411-7.241 1.375-1.736 1.648-2.675 4.12-2.623 6.499.052 2.328 1.057 4.424 2.648 6.094 2.629 2.759 6.541 3.717 10.241 3.633 3.994-.09 7.904-1.202 11.549-2.78 3.53-1.527 6.706-3.661 9.301-6.519 3.388-3.732 5.791-8.382 6.797-13.325.497-2.444.689-4.949.515-7.438-.063-.903-.725-1.675-1.675-1.675-.858 0-1.738.768-1.675 1.675.155 2.227.028 4.396-.36 6.371a27 27 0 0 1-.871 3.295 21 21 0 0 1-1.153 2.837c-.954 1.96-2.172 3.839-3.47 5.351a26 26 0 0 1-2.329 2.383c-.384.345-.782.671-1.182.998-.076.063-.25.17.097-.073q-.084.062-.167.125-.238.176-.48.345c-1.227.857-2.54 1.59-3.889 2.235q-.541.255-1.088.496c-.084.037-.371.157-.034.016l-.251.104a33.732 33.732 0 0 1-3.134 1.11q-1.21.364-2.446.628-.615.13-1.234.234c-.206.034-.412.06-.617.094-.276.046.411-.045-.034.004q-.205.023-.41.046a21 21 0 0 1-2.427.117 18 18 0 0 1-1.181-.053q-.29-.026-.58-.057c-.104-.011-.405-.064 0 .002q-.19-.03-.377-.061a12.4 12.4 0 0 1-2.164-.571c-.094-.035-.188-.08-.285-.109-.241-.072.368.173.008.003-.146-.069-.293-.135-.437-.207a10 10 0 0 1-1.434-.89c.366.27-.154-.137-.225-.2a9 9 0 0 1-.823-.836c-.054-.063-.104-.132-.162-.192-.177-.183.228.323-.011-.012q-.152-.21-.296-.424c-.13-.198-.255-.4-.366-.608q-.074-.14-.141-.281c-.21-.427.073.273-.07-.18-.063-.199-.13-.396-.181-.599a7 7 0 0 1-.083-.382c-.016-.082-.057-.423-.022-.098a8 8 0 0 1-.009-1.491c.024-.298-.083.388.012-.101.02-.103.037-.206.06-.309a7 7 0 0 1 .282-.983c.026-.071.162-.383.038-.11a7 7 0 0 1 .528-.961c-.015.023.279-.394.142-.213s.183-.214.165-.194a6.213 6.213 0 0 1 .675-.657c-.217.183.049-.034.109-.074a6 6 0 0 1 .785-.437c-.074.032-.247.08.058-.014.235-.072.467-.14.709-.191.287-.061-.381.001.113-.016.106-.004.211-.012.317-.012s.21.007.315.012c-.334-.014.101.022.167.039q.149.038.294.088c-.288-.098.013.009.088.054.063.039.333.23.109.049.084.068.157.148.235.222.221.208.094.106.043.034.077.108.137.225.204.339.133.229-.069-.215.023.034q.082.226.136.461c.018.073.081.42.038.116a6.845 6.845 0 0 1 .026 1.089q-.012.213-.034.425c.007-.074.049-.282-.009.063q-.069.418-.166.83c-.585 2.462-1.572 4.71-2.778 6.917-2.261 4.137-4.998 7.734-8.7 10.714-1.412 1.138-3.578 2.417-5.25 3.119.166-.069-.153.062-.186.075a26 26 0 0 1-1.021.384 23 23 0 0 1-3.086.842 21 21 0 0 1-1.077.182q-.18.026.03-.004-.125.016-.249.028a18 18 0 0 1-3.07.079 18 18 0 0 1-.738-.063c-.075-.009-.428-.058-.124-.013l-.324-.051a14 14 0 0 1-1.514-.34 13 13 0 0 1-1.391-.476c-.286-.117.342.171-.127-.058-.099-.049-.199-.093-.297-.141a12 12 0 0 1-.73-.389c-.989-.568-1.505-.956-2.302-1.777-.754-.776-1.223-1.442-1.746-2.484-.054-.106-.103-.214-.156-.321-.249-.507.046.133-.078-.171a10.5 10.5 0 0 1-.483-1.521 10 10 0 0 1-.094-.432c-.01-.053-.092-.536-.052-.253a9 9 0 0 1-.072-1.497c.019-.67.02-.733.172-1.36.135-.557.235-.835.398-1.168q.165-.338.365-.656.11-.175.229-.345c.186-.27-.1.078.146-.177.15-.156.293-.318.453-.464-.023.021.379-.308.201-.176-.147.109.123-.079.156-.1.198-.127.408-.249.626-.339-.261.108-.001.01.045 0 .156-.036.309-.086.466-.119.482-.104-.168-.003.139-.011.146-.004.291-.001.437 0 .042 0 .324.04.075-.001q.172.03.341.074c.114.029.224.066.336.098.506.143-.104-.066.171.062.291.134.579.301.837.494-.062-.047-.169-.156.078.069q.133.117.26.241.157.156.301.325c.206.242-.192-.315.129.171.31.468.526.883.662 1.287.389 1.151.453 2.037.364 3.279-.007.102-.07.668-.04.459q-.067.448-.169.888a13 13 0 0 1-.491 1.643 9 9 0 0 1-.524 1.184q-.417.825-.914 1.603c-1.196 1.879-2.689 3.514-4.361 5.131-3.332 3.222-7.106 6.476-11.636 7.57-1.153.278-2.041.369-3.297.32-1.069-.041-1.843-.176-2.976-.513-1.997-.596-3.97-1.763-5.615-3.111a34 34 0 0 1-2.413-2.162c-.735-.731-1.474-1.556-1.963-2.247-.305-.43-.588-.876-.837-1.34a8 8 0 0 1-.375-.77c.03.074.081.237-.02-.07-.053-.159-.111-.315-.16-.475a8 8 0 0 1-.163-.641c.006.028-.081-.499-.05-.262.03.236-.02-.295-.018-.267-.012-.219 0-.436.005-.655.01-.504-.042.168.01-.123a6 6 0 0 1 .2-.793c.021-.065.142-.396.035-.136.083-.202.188-.397.296-.586.303-.526.363-.612.855-1.073q.12-.11.245-.217c-.19.16.014-.012.051-.037.229-.154.461-.285.702-.419.039-.022.291-.126.049-.03q.158-.062.32-.113a6 6 0 0 1 .414-.115c.061-.015.505-.093.352-.074-.234.029.29-.014.264-.013q.16-.007.32-.003c.081.002.674.075.34.015q.385.068.757.185.148.05.294.103c-.308-.111.139.069.169.084a6.3 6.3 0 0 1 .93.579c-.063-.048-.198-.18.03.035.154.146.314.285.461.438q.139.143.269.295.08.09.155.184-.122-.159-.018-.019.426.594.733 1.259c.127.273-.113-.359.051.126.034.104.072.205.106.309q.136.416.238.841a13 13 0 0 1 .233 1.184c-.011-.077-.027-.28.005.063.049.537.08 1.073.072 1.612a14 14 0 0 1-.061 1.101c.004-.039-.056.514-.027.284.028-.23-.05.321-.044.282q-.027.169-.059.336-.078.42-.18.836a17 17 0 0 1-.978 2.86 21.6 21.6 0 0 1-3.421 5.24 25.4 25.4 0 0 1-2.879 2.777c-.074.06-.507.402-.327.264q-.66.507-1.359.961c-3.914 2.553-8.633 3.859-13.18 4.215a42.3 42.3 0 0 1-7.179-.076c-.902-.084-1.675.829-1.675 1.675 0 .975.77 1.591 1.675 1.675"
        />
        <circle cx={390.5} cy={93.5} r={24.5} fill="#fff" stroke="#000" strokeWidth={4} />
        <circle cx={420.5} cy={137.5} r={10.5} fill="#fff" stroke="#000" strokeWidth={4} />
        <circle cx={89} cy={405} r={13} fill="#fff" stroke="#000" strokeWidth={4} />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M110.011 383.373c2.094-4.107 9.817-15.291 23.958-27.171M96.265 377.799c1.528-3.657 7.244-13.316 17.88-22.693"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M28 37h438v456H28z" />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(PrimarySmile)
export { ForwardRef as PrimarySmile }
