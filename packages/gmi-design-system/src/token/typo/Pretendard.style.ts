import { globalFontFace } from '@vanilla-extract/css'

globalFontFace('Pretendard', {
  src: 'url(./PretendardVariable.woff2) format("woff2")',
  fontWeight: 600,
  fontStyle: 'normal',
  fontDisplay: 'fallback',
})

globalFontFace('Pretendard', {
  src: 'url(./PretendardVariable.woff2) format("woff2")',
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'fallback',
})

globalFontFace('Pretendard', {
  src: 'url(./PretendardVariable.woff2) format("woff2")',
  fontWeight: 300,
  fontStyle: 'normal',
  fontDisplay: 'fallback',
})

export const pretendardSemibold = {
  fontFamily: 'Pretendard, system-ui',
  fontWeight: 600,
}

export const pretendardMedium = {
  fontFamily: 'Pretendard, system-ui',
  fontWeight: 500,
}

export const pretendardLight = {
  fontFamily: 'Pretendard, system-ui',
  fontWeight: 300,
}
