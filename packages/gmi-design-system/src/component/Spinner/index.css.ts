import { recipe } from '@vanilla-extract/recipes'
// const SpinnerSvg = styled.svg<{ speed: number }>`
//    animation: ${spinAnimation} ${({ speed }) => speed}s linear infinite;
// `
// const spinAnimation = keyframes`
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// `

import { keyframes, style } from '@vanilla-extract/css'

export const SpinnerSizeMap = { s: 20, m: 25, l: 30 }

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const spin = style({
  animationName: rotate,
  animationDuration: '1s',
})

export const spinnerSvg = recipe({
  base: {
    animationName: rotate,
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

  variants: {
    size: {
      small: {
        width: 20,
        height: 20,
      },
      medium: {
        width: 25,
        height: 25,
      },
      large: {
        width: 30,
        height: 30,
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})
