import { style } from '@vanilla-extract/css'
import { color } from '@gds/token'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '16px',
   height: '780px',
})

export const Title = style({
   marginBottom: '18px',
})

export const InputBtnWrapper = style({
   display: 'flex',
   marginBottom: '16px',
   fontWeight: '500',
   fontSize: '14px',
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

export const AcceptTxtStyle = style({
   color: color['primary-main'],
   display: 'flex',
   alignItems: 'center',
})
