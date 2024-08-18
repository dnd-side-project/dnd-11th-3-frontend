import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const absolutePos = style({
   position: 'absolute',
   top: 0,
   left: 0,
   overflowY: 'scroll',
})

export const HomeWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '0 16px',
})

export const RecommendWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   marginBottom: '10px',
})

export const RecommendHeaderBox = style({
   display: 'flex',
   width: '100%',
})

export const RecommendTitle = style({
   marginRight: 'auto',
   display: 'flex',
   alignItems: 'center',
   fontSize: '18px',
   fontWeight: '600',
   color: color['gray-100'],
})
export const MoreBox = style({
   marginLeft: 'auto',
   width: '52px',
})

export const overlay = style({
   position: 'absolute',
   top: 0,
   left: 0,
})

export const Line = style({
   backgroundColor: color['gray-900'],
   height: '4px',
   width: '100%',
   border: 'none',
   margin: '30px 0',
})

export const floatingButton = style({
   position: 'absolute',
   width: 127,
   zIndex: 999, // TODO: fix 확장성이 없음으로 z-index를 사용하지 않도록 수정
   bottom: 100,
   left: 250,
})
