import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '16px',
   height: '100%',
})

export const Title = style({
   marginBottom: '18px',
})

export const InputBtnWrapper = style({
   display: 'flex',
   marginBottom: '16px',
})

export const NickNameBox = style({
   display: 'flex',
})

export const FinalBtnBox = style({
   marginTop: 'auto',
})

export const ButtonStyle = style({
   width: '58px',
   marginLeft: '8px',
})

export const DuplicatedBtnStyle = style({
   marginLeft: '8px',
   marginTop: '37px',
   width: '86px',
})

export const NickNameDescriptionWrapper = style({
   display: 'flex',
   alignItems: 'center',
})
