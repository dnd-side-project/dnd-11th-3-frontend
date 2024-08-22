import type { SVGProps } from 'react'
import { Ref, forwardRef } from 'react'
import type { IconProps } from '../shared/props'

function SplashLogo(
   {
      title = 'SplashLogo',
      titleId = 'GDS-SplashLogo',
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
         viewBox="0 0 219 329"
         color={color}
         ref={ref}
         aria-labelledby={titleId}
         {...props}
      >
         {title ? <title id={titleId}>{title}</title> : null}
         <path
            fill="#000"
            d="M45.26 311.22c0 7.68-7.62 12.12-15.72 12.12s-15.72-4.44-15.72-12.12 7.62-12.12 15.72-12.12 15.72 4.44 15.72 12.12m-24-21.6v-8.46h8.28v8.46h24.24c1.62 0 1.86 1.02 1.86 3.3 0 2.34-.24 3.24-1.86 3.24H4.1v-6.54zm22.02-2.88c-2.52 0-4.02-.36-4.02-1.74v-9.48c0-1.08-.48-1.32-1.32-1.32h-26.1v-6.84H39.8c1.56 0 3.72 1.38 5.1 2.76 1.26 1.26 2.52 3.12 2.52 4.32V285c0 1.38-1.44 1.74-4.14 1.74m-6.18 24.48c0-3.18-3.12-5.46-7.5-5.46-4.5 0-7.62 2.28-7.62 5.46s3.12 5.46 7.62 5.46c4.44 0 7.5-2.28 7.5-5.46m62.381-18.9h-24.96c-1.5 0-3.72-1.62-4.98-2.94-1.26-1.26-2.52-2.94-2.52-4.02v-16.2h36.66v18.66c0 2.82-1.32 4.5-4.2 4.5m-39.6 5.52h49.68c1.62 0 1.86 1.26 1.86 3.54 0 2.34-.24 3.48-1.86 3.48h-20.04v13.44c0 1.38-1.5 1.74-4.2 1.74-2.52 0-4.08-.3-4.08-1.68v-13.5h-21.36zm15.42-21.78v8.04c0 1.02.42 1.32 1.44 1.32h18.66v-9.36zm61.002 38.64h25.14c1.32 0 1.56 1.38 1.56 3.42 0 2.22-.24 3.36-1.56 3.36h-27.18c-1.56 0-3.72-1.44-4.98-2.76-1.32-1.26-2.52-3.12-2.52-4.26v-12.78h8.16v11.7c0 .9.48 1.32 1.38 1.32m25.5-47.88v36.48c0 1.56-1.86 1.8-4.08 1.8-2.58 0-4.08-.42-4.08-1.8v-36.48zm-31.38 8.22c-4.26 0-6.9 3.3-6.9 7.14s2.64 7.08 6.9 7.08 6.84-3.24 6.84-7.08-2.58-7.14-6.84-7.14m0 21.06c-8.22 0-14.82-6.24-14.82-13.92 0-7.74 6.6-13.98 14.82-13.98s14.76 6.24 14.76 13.98c0 7.68-6.54 13.92-14.76 13.92"
         />
         <path
            fill="#FFBA56"
            stroke="#000"
            strokeWidth={3}
            d="m198.795 56.159 1.101 1.018-1.101-1.018c-.645.698-1.354 1.341-2.117 2.035l-.309.28c-1.461 1.33-2.472 2.91-2.943 4.747h-21.065c-.532-2.09-1.742-3.82-3.422-5.306l-.994 1.123.994-1.123c-3.369-2.98-5.585-6.287-6.687-9.859-1.102-3.57-1.119-7.498.054-11.77 2.318-8.44 8.029-13.585 16.756-15.347 8.957-1.808 18.136 2.52 22.611 10.535 4.456 7.98 3.288 18.017-2.878 24.685Z"
         />
         <path
            fill="#fff"
            stroke="#000"
            strokeWidth={3}
            d="M193.116 63.5h-20.472a49 49 0 0 0-.011 2.337q.007.58.008 1.196 0 .757-.004 1.497c-.004 1.021-.008 2.024.009 3.038.034 1.997.679 3.51 1.686 4.528s2.503 1.67 4.484 1.707zm0 0c.015 2.657.021 5.307-.008 7.954-.023 2.072-.67 3.612-1.683 4.638-1.011 1.024-2.531 1.68-4.58 1.713z"
         />
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={3}
            d="M175.254 51.378c4.416.252 12.997-1.361 11.987-9.829s-6.729-9.072-8.202-3.78c-1.892 6.804 1.641 13.609 13.249 13.609"
         />
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={2.7}
            d="M182.07 2v8.517M197.801 14.836l6.022-6.023M160.324 8.813l6.023 6.022M209.324 29.758l8.227-2.205M148 27.555l8.227 2.204"
         />
         <path
            fill="#000"
            fillRule="evenodd"
            d="M71.943 170.029c-37.084 2.716-54.102 47.018-57.886 68.699q-.202 1.16-.198 2.273h131.323c-4.118-26.687-22.92-74.658-73.239-70.972"
            clipRule="evenodd"
         />
         <path
            fill="#000"
            d="m14.057 238.728 1.503.262zm57.886-68.699.112 1.521zM13.86 241.001l-1.525.004.005 1.521h1.52zm131.323 0v1.525h1.778l-.271-1.758zM15.56 238.99c1.863-10.679 7-26.966 16.224-40.881 9.221-13.912 22.38-25.249 40.27-26.559l-.222-3.042c-19.194 1.406-33.087 13.578-42.59 27.916-9.504 14.336-14.767 31.04-16.687 42.041zm-.175 2.007a11.5 11.5 0 0 1 .175-2.007l-3.005-.525q-.225 1.289-.22 2.54zm-1.526 1.529h131.323v-3.05H13.859zm58.196-70.976c24.562-1.799 41.377 8.971 52.626 23.508 11.299 14.601 16.96 32.995 18.994 46.176l3.014-.466c-2.084-13.506-7.883-32.441-19.595-47.576-11.761-15.199-29.506-26.571-55.262-24.684z"
         />
         <path
            fill="#000"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={2.759}
            d="M101.076 171.887c2.749.724 9.309 3.152 17.311 2.037 12.879-1.795 22.117-11.002 23.844-12.412.608-.496 9.413 13.265 13.697 20.877 4.578 8.134-27.208 36.038-51.21 33.499-11.47-1.213-22.465-10.557-22.592-23.058-.115-11.422 8.26-23.757 18.95-20.943Z"
         />
         <path
            fill="#fff"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={3.186}
            d="M139.713 165.042c2.402-4.447 2.045-4.18 4.235-10.39 4.023-11.404-.95-19.347 2.763-21.898 2.348-1.613 5.48-.866 7.931 2.319 3.2 4.157 1.074 11.71 1.074 11.71s1.356.197 3.642.343c4.018.257 7.095 3.816 9.029 7.02 3.58 5.93 5.695 14.172 1.924 20.475-1.408 2.355-3.377 4.531-5.46 6.31-1.163.993-5.665 4.551-11.421 3.92z"
         />
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={3.186}
            d="M166.738 170.967c-8.675 6.027-22.367-19.45-10.129-23.982"
         />
         <path
            fill="#fff"
            stroke="#000"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3}
            d="M125.958 99.087c-2.999-2.764-6.969 1.603-14.678-1.959-2.544-1.175-19.57-32.913-61.452-19.722-21.595 6.802-44.426 36.374-34.25 72.226 8.338 29.37 42.95 41.53 67.129 35.459 57.733-14.497 56.26-74.015 43.251-86.004Z"
         />
         <path
            fill="#fff"
            d="M33.386 153.72c-.883 1.151-4.991 6.508-11.264 7.063-9.07.803-18.435-8.805-19.556-19.15-1.26-11.613 5.455-21.868 14.997-22.905 7.544-.819 13.588 5.594 14.382 6.469"
         />
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3.05}
            d="M33.386 153.72c-.883 1.151-4.991 6.508-11.264 7.063-9.07.803-18.435-8.805-19.556-19.15-1.26-11.613 5.455-21.868 14.997-22.905 7.544-.819 13.588 5.594 14.382 6.469"
         />
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3.05}
            d="M8.926 137.875c1.445-.992 4.612-2.876 9.068-3.265 5.36-.468 9.38 1.507 10.894 2.351"
         />
         <path
            fill="#000"
            d="M84.43 115.462a4.525 4.525 0 0 0 4.522-4.528 4.525 4.525 0 0 0-4.523-4.528 4.525 4.525 0 0 0-4.523 4.528 4.525 4.525 0 0 0 4.523 4.528"
         />
         <path
            fill="#fff"
            d="M85.308 109.881c-.315-.064-.546-.281-.538-.505l.041-1.176c.01-.264.342-.429.712-.354l.378.077c.37.075.612.357.518.603L86 109.625c-.08.21-.377.32-.692.256M84.978 110.569l.1.02c.272.055.456.257.4.44l-.157.523c-.05.168-.284.259-.532.209s-.427-.225-.409-.399l.058-.543c.02-.191.268-.306.54-.25"
         />
         <path
            fill="#000"
            d="M96.886 109.165a4.525 4.525 0 0 0 4.523-4.528 4.525 4.525 0 0 0-4.523-4.528 4.525 4.525 0 0 0-4.523 4.528 4.525 4.525 0 0 0 4.523 4.528"
         />
         <path
            fill="#fff"
            d="M97.77 103.592c-.316-.064-.547-.281-.54-.505l.042-1.176c.01-.264.342-.429.712-.354l.378.077c.37.075.612.357.518.603l-.419 1.099c-.08.21-.377.32-.692.256M97.435 104.28l.1.02c.272.055.456.257.4.44l-.157.523c-.05.168-.284.259-.532.208-.248-.05-.427-.225-.409-.399l.058-.543c.02-.19.268-.305.54-.249"
         />
         <mask id="a" fill="#fff">
            <path d="M33.028 95.277c.295 1.724 1.65 3.088 2.863 4.25a25 25 0 0 0 3.26 2.633 23.1 23.1 0 0 0 6.996 3.174c4.914 1.305 10.185.991 15.01-.537a32.65 32.65 0 0 0 13.189-8.034c3.846-3.86 6.749-8.795 7.843-14.165.728-3.578.854-7.594-.396-11.074-1.104-3.073-3.124-5.81-5.9-7.564-2.503-1.583-5.576-2.223-8.494-1.728-2.372.403-4.594 1.735-6.153 3.558-3.382 3.957-4.009 9.733-1.587 14.338 1.526 2.902 4.187 5.191 7.09 6.644 3.082 1.543 6.511 2.258 9.942 2.385 6.804.252 13.743-1.864 19.439-5.552 2.967-1.922 5.685-4.3 8.173-6.805a60.7 60.7 0 0 0 6.926-8.367q1.474-2.144 2.752-4.409c.349-.617.167-1.508-.485-1.853-.641-.339-1.479-.173-1.851.486a59 59 0 0 1-4.233 6.463 51 51 0 0 1-1.441 1.818 58.6 58.6 0 0 1-9.165 8.89c.16-.123-.171.13-.229.173a32 32 0 0 1-1.503 1.061 33.6 33.6 0 0 1-5.21 2.828c-.055.024-.308.132-.082.037l-.233.096a34 34 0 0 1-2.976 1.067 33 33 0 0 1-5.124 1.14c.2-.026-.209.025-.195.023l-.25.03q-.624.07-1.251.113-1.187.085-2.376.07a27 27 0 0 1-2.977-.2c-.27-.032-.064-.008-.01 0a25 25 0 0 1-1.585-.272 22 22 0 0 1-2.27-.585 20 20 0 0 1-1.278-.457c.015.006-.36-.146-.182-.072s-.194-.085-.179-.079q-.17-.074-.337-.153a18 18 0 0 1-2.053-1.127q-.466-.297-.911-.626c-.021-.015-.342-.263-.117-.085a16 16 0 0 1-.66-.549 14.5 14.5 0 0 1-1.849-1.953c.034.044.142.192-.011-.02q-.166-.225-.325-.46a11.6 11.6 0 0 1-.887-1.572l-.077-.17c-.132-.28.078.214.009.026-.058-.158-.125-.313-.182-.472a11.3 11.3 0 0 1-.525-2.054c-.01-.066-.007-.159-.033-.22.09.218.027.226.015.096a15 15 0 0 1-.067-.881q-.03-.832.057-1.66.014-.108.025-.216c.018-.197-.056.355-.007.06.022-.128.041-.257.065-.384a12 12 0 0 1 .623-2.172c.144-.145.23-.503.326-.69a11 11 0 0 1 .83-1.364c.038-.052.27-.384.145-.198-.13.191.027-.032.05-.059q.078-.098.16-.192.514-.602 1.114-1.116c.096-.082.242-.166.321-.262-.016.02-.26.192-.076.06q.068-.048.134-.097a9.4 9.4 0 0 1 1.396-.825c.122-.058.458-.138.098-.052.144-.034.293-.118.433-.168a9 9 0 0 1 1.625-.416c.047-.007.136-.008.174-.026-.187.09-.238.028-.096.015q.223-.023.446-.04a9.8 9.8 0 0 1 1.766.048c.248.024-.038-.012-.071-.012.079 0 .164.025.242.037q.27.045.54.103c.666.143 1.321.343 1.952.602-.264-.109-.027-.01.038.02a11 11 0 0 1 .654.325 11.4 11.4 0 0 1 1.417.905c.204.15.032.025-.007-.006q.11.087.218.177a12.5 12.5 0 0 1 1.562 1.544q.146.174.288.35c.23.283-.098-.142.031.04.076.109.157.214.234.322a14 14 0 0 1 1.321 2.327c.029.064.13.303.022.043q.045.105.086.212.21.531.377 1.078c.21.69.37 1.398.468 2.114-.042-.301-.008-.041 0 .035l.031.319a25 25 0 0 1 .099 2.098c.01 2-.183 3.591-.663 5.495a25 25 0 0 1-1.115 3.371q-.035.089-.073.175l-.013.025a27 27 0 0 1-1.655 3.185 28 28 0 0 1-1.534 2.268c-.079.105-.25.342-.075.102-.11.153-.234.298-.352.445a30 30 0 0 1-3.747 3.87 31 31 0 0 1-1.02.845l-.149.117c-.233.186.194-.145-.025.02a32 32 0 0 1-6.229 3.71q-.192.087-.386.17c-.08.035-.28.142.021-.008-.055.028-.116.049-.173.072q-.434.179-.871.343a29.3 29.3 0 0 1-5.188 1.427q-.408.072-.819.131c-.035.005-.14.034-.182.026.255.047.193-.025.04-.007q-.25.031-.502.059-.866.092-1.736.127a25 25 0 0 1-3.914-.154c.012.001-.179-.017-.18-.023.008.03.323.047.044.005q-.45-.065-.9-.146a22.4 22.4 0 0 1-4.176-1.19c-.142-.056-.291-.106-.428-.174.03.015.286.124.068.027q-.128-.056-.255-.113a21.8 21.8 0 0 1-3.886-2.256l-.352-.26c-.26-.193.162.132.002.002q-.115-.091-.23-.183a23 23 0 0 1-1.467-1.28c-.47-.447-.928-.91-1.353-1.4a10 10 0 0 1-.207-.247c-.152-.187.165.253-.061-.083-.095-.141-.192-.28-.278-.428-.052-.09-.093-.191-.15-.278-.116-.18.08.27-.036-.08-.066-.201-.12-.4-.155-.61-.12-.7-1.017-1.156-1.664-.946-.755.245-1.074.916-.945 1.666" />
         </mask>
         <path
            fill="#000"
            stroke="#000"
            strokeWidth={29.498}
            d="M33.028 95.277c.295 1.724 1.65 3.088 2.863 4.25a25 25 0 0 0 3.26 2.633 23.1 23.1 0 0 0 6.996 3.174c4.914 1.305 10.185.991 15.01-.537a32.65 32.65 0 0 0 13.189-8.034c3.846-3.86 6.749-8.795 7.843-14.165.728-3.578.854-7.594-.396-11.074-1.104-3.073-3.124-5.81-5.9-7.564-2.503-1.583-5.576-2.223-8.494-1.728-2.372.403-4.594 1.735-6.153 3.558-3.382 3.957-4.009 9.733-1.587 14.338 1.526 2.902 4.187 5.191 7.09 6.644 3.082 1.543 6.511 2.258 9.942 2.385 6.804.252 13.743-1.864 19.439-5.552 2.967-1.922 5.685-4.3 8.173-6.805a60.7 60.7 0 0 0 6.926-8.367q1.474-2.144 2.752-4.409c.349-.617.167-1.508-.485-1.853-.641-.339-1.479-.173-1.851.486a59 59 0 0 1-4.233 6.463 51 51 0 0 1-1.441 1.818 58.6 58.6 0 0 1-9.165 8.89c.16-.123-.171.13-.229.173a32 32 0 0 1-1.503 1.061 33.6 33.6 0 0 1-5.21 2.828c-.055.024-.308.132-.082.037l-.233.096a34 34 0 0 1-2.976 1.067 33 33 0 0 1-5.124 1.14c.2-.026-.209.025-.195.023l-.25.03q-.624.07-1.251.113-1.187.085-2.376.07a27 27 0 0 1-2.977-.2c-.27-.032-.064-.008-.01 0a25 25 0 0 1-1.585-.272 22 22 0 0 1-2.27-.585 20 20 0 0 1-1.278-.457c.015.006-.36-.146-.182-.072s-.194-.085-.179-.079q-.17-.074-.337-.153a18 18 0 0 1-2.053-1.127q-.466-.297-.911-.626c-.021-.015-.342-.263-.117-.085a16 16 0 0 1-.66-.549 14.5 14.5 0 0 1-1.849-1.953c.034.044.142.192-.011-.02q-.166-.225-.325-.46a11.6 11.6 0 0 1-.887-1.572l-.077-.17c-.132-.28.078.214.009.026-.058-.158-.125-.313-.182-.472a11.3 11.3 0 0 1-.525-2.054c-.01-.066-.007-.159-.033-.22.09.218.027.226.015.096a15 15 0 0 1-.067-.881q-.03-.832.057-1.66.014-.108.025-.216c.018-.197-.056.355-.007.06.022-.128.041-.257.065-.384a12 12 0 0 1 .623-2.172c.144-.145.23-.503.326-.69a11 11 0 0 1 .83-1.364c.038-.052.27-.384.145-.198-.13.191.027-.032.05-.059q.078-.098.16-.192.514-.602 1.114-1.116c.096-.082.242-.166.321-.262-.016.02-.26.192-.076.06q.068-.048.134-.097a9.4 9.4 0 0 1 1.396-.825c.122-.058.458-.138.098-.052.144-.034.293-.118.433-.168a9 9 0 0 1 1.625-.416c.047-.007.136-.008.174-.026-.187.09-.238.028-.096.015q.223-.023.446-.04a9.8 9.8 0 0 1 1.766.048c.248.024-.038-.012-.071-.012.079 0 .164.025.242.037q.27.045.54.103c.666.143 1.321.343 1.952.602-.264-.109-.027-.01.038.02a11 11 0 0 1 .654.325 11.4 11.4 0 0 1 1.417.905c.204.15.032.025-.007-.006q.11.087.218.177a12.5 12.5 0 0 1 1.562 1.544q.146.174.288.35c.23.283-.098-.142.031.04.076.109.157.214.234.322a14 14 0 0 1 1.321 2.327c.029.064.13.303.022.043q.045.105.086.212.21.531.377 1.078c.21.69.37 1.398.468 2.114-.042-.301-.008-.041 0 .035l.031.319a25 25 0 0 1 .099 2.098c.01 2-.183 3.591-.663 5.495a25 25 0 0 1-1.115 3.371q-.035.089-.073.175l-.013.025a27 27 0 0 1-1.655 3.185 28 28 0 0 1-1.534 2.268c-.079.105-.25.342-.075.102-.11.153-.234.298-.352.445a30 30 0 0 1-3.747 3.87 31 31 0 0 1-1.02.845l-.149.117c-.233.186.194-.145-.025.02a32 32 0 0 1-6.229 3.71q-.192.087-.386.17c-.08.035-.28.142.021-.008-.055.028-.116.049-.173.072q-.434.179-.871.343a29.3 29.3 0 0 1-5.188 1.427q-.408.072-.819.131c-.035.005-.14.034-.182.026.255.047.193-.025.04-.007q-.25.031-.502.059-.866.092-1.736.127a25 25 0 0 1-3.914-.154c.012.001-.179-.017-.18-.023.008.03.323.047.044.005q-.45-.065-.9-.146a22.4 22.4 0 0 1-4.176-1.19c-.142-.056-.291-.106-.428-.174.03.015.286.124.068.027q-.128-.056-.255-.113a21.8 21.8 0 0 1-3.886-2.256l-.352-.26c-.26-.193.162.132.002.002q-.115-.091-.23-.183a23 23 0 0 1-1.467-1.28c-.47-.447-.928-.91-1.353-1.4a10 10 0 0 1-.207-.247c-.152-.187.165.253-.061-.083-.095-.141-.192-.28-.278-.428-.052-.09-.093-.191-.15-.278-.116-.18.08.27-.036-.08-.066-.201-.12-.4-.155-.61-.12-.7-1.017-1.156-1.664-.946-.755.245-1.074.916-.945 1.666Z"
            mask="url(#a)"
         />
         <path
            fill="#fff"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={3}
            d="M108.552 171.184c3.047-5.641 2.594-5.302 5.373-13.18 5.103-14.466-1.205-24.543 3.504-27.779 2.979-2.046 6.952-1.098 10.062 2.942 2.838 3.686 2.373 9.478 1.837 12.63-.203 1.191.587 2.366 1.79 2.477.659.061 1.449.125 2.355.183 5.097.326 9 4.841 11.454 8.905 4.541 7.523 7.224 17.978 2.441 25.974-1.787 2.987-4.284 5.748-6.927 8.005-1.475 1.259-7.186 5.772-14.488 4.972z"
         />
         <path
            stroke="#000"
            strokeLinecap="round"
            strokeWidth={3}
            d="M142.102 170.988c2.656-1.051 4.827-1.125 6.702-.285M139.989 163.464c2.959-.914 5.427-.856 7.614.124M136.559 156.449c2.96-.915 5.427-.856 7.615.123"
         />
         <path
            fill="#000"
            stroke="#000"
            strokeMiterlimit={10}
            strokeWidth={3.5}
            d="M52 186c3.487.918 19.35-1.334 29.501-2.749 16.337-2.277 28.057-13.956 30.247-15.745.772-.63 11.941 16.828 17.376 26.484 5.807 10.318-34.514 45.715-64.963 42.495-14.55-1.538-28.498-13.393-28.659-29.25C35.356 192.745 38.44 182.431 52 186Z"
         />
         <path
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={3.5}
            d="M131 198.001c0 9.001-25.319 37.683-70.326 34.439"
         />
      </svg>
   )
}
const ForwardRef = forwardRef(SplashLogo)
export { ForwardRef as SplashLogo }