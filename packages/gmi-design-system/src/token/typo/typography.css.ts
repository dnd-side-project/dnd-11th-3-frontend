import { style } from '@vanilla-extract/css'
import { pretendardLight, pretendardMedium, pretendardSemibold } from './Pretendard.css'

export const TEXT_STYLE_SIZE = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'body1',
  body2: 'body2',
  body3: 'body3',
  body4: 'body4',
  highlight1: 'highlight1',
} as const

export const TEXT_STYLE_WEIGHT = {
  sb: 'sb',
  md: 'md',
  lg: 'lg',
} as const

type TextStyle = {
  [key in keyof typeof TEXT_STYLE_WEIGHT]: string
}

export type TypoType = {
  [key in keyof typeof TEXT_STYLE_SIZE]: TextStyle
}

export const Typo: TypoType = {
  [TEXT_STYLE_SIZE.h1]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '22px',
      letterSpacing: '-1px',
      lineHeight: '30px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '22px',
      letterSpacing: '-1px',
      lineHeight: '30px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '22px',
      letterSpacing: '-1px',
      lineHeight: '30px',
    }),
  },
  [TEXT_STYLE_SIZE.h2]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '20px',
      letterSpacing: '-1px',
      lineHeight: '28px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '20px',
      letterSpacing: '-1px',
      lineHeight: '28px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '20px',
      letterSpacing: '-1px',
      lineHeight: '28px',
    }),
  },
  [TEXT_STYLE_SIZE.h3]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '18px',
      letterSpacing: '-1px',
      lineHeight: '26px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '18px',
      letterSpacing: '-1px',
      lineHeight: '26px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '18px',
      letterSpacing: '-1px',
      lineHeight: '26px',
    }),
  },
  [TEXT_STYLE_SIZE.body1]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '16px',
      lineHeight: '24px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '16px',
      lineHeight: '24px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '16px',
      lineHeight: '24px',
    }),
  },
  [TEXT_STYLE_SIZE.body2]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '14px',
      lineHeight: '20px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '14px',
      lineHeight: '20px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '14px',
      lineHeight: '20px',
    }),
  },
  [TEXT_STYLE_SIZE.body3]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '12px',
      lineHeight: '16px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '12px',
      lineHeight: '16px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '12px',
      lineHeight: '16px',
    }),
  },
  [TEXT_STYLE_SIZE.body4]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '10px',
      lineHeight: '12px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '10px',
      lineHeight: '12px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '10px',
      lineHeight: '12px',
    }),
  },
  [TEXT_STYLE_SIZE.highlight1]: {
    [TEXT_STYLE_WEIGHT.lg]: style({
      ...pretendardLight,
      fontSize: '25px',
      letterSpacing: '-1px',
      lineHeight: '32px',
    }),
    [TEXT_STYLE_WEIGHT.md]: style({
      ...pretendardMedium,
      fontSize: '25px',
      letterSpacing: '-1px',
      lineHeight: '32px',
    }),
    [TEXT_STYLE_WEIGHT.sb]: style({
      ...pretendardSemibold,
      fontSize: '25px',
      letterSpacing: '-1px',
      lineHeight: '32px',
    }),
  },
}

export const typoWrapper = style({ display: 'flex', marginBottom: '20px' })
export const typoBox = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
})
