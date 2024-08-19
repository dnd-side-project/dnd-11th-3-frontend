import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   display: 'flex',
   flexDirection: 'column',
   padding: '16px',
})

export const Header = style({
   display: 'flex',
   height: '46px',
})

export const HeaderTitle = style({
   fontSize: '20px',
   fontWeight: '600',
   lineHeight: '24px',
   color: color['gray-300'],
})

export const IconBox = style({
   marginLeft: 'auto',
})

export const MainWrapper = style({
   display: 'flex',
   flexDirection: 'column',
})

export const ChatsListWrapper = style({
   display: 'flex',
   flexDirection: 'column',
})

export const DateTxt = style({
   fontSize: '12px',
   color: color['gray-100'],
   fontWeight: '500',
   lineHeight: '16px',
})

export const ChatListWrapper = style({
   borderBottom: `1px solid ${color['gray-700']}`,
   display: 'flex',
   padding: '15px 0',
})

export const ChatInfoWrapper = style({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   marginLeft: '16px',
})

export const ChatTopBox = style({
   display: 'flex',
   alignItems: 'center',
   width: '286px',
})

export const NickNameTxt = style({
   color: color['gray-100'],
   fontSize: '14px',
   fontWeight: '600',
   lineHeight: '16px',
})

export const JobGroupTxt = style({
   color: color['gray-400'],
   fontSize: '12px',
   fontWeight: '500',
   lineHeight: '16px',
   marginLeft: '4px',
})

export const UnreadMessageCnt = style({
   marginLeft: 'auto',
   borderRadius: '19px',
   backgroundColor: color.error,
   padding: '1px 6px',
   display: 'flex',
   justifyContent: 'center',
})
export const CntTxt = style({
   color: color.white,
   fontSize: '10px',
   fontWeight: '700',
   lineHeight: '13px',
})

export const ChatBottomBox = style({
   display: 'flex',
   alignItems: 'center',
   width: '286px',
   marginTop: '8px',
})

export const ChatMessage = style({
   fontSize: '12px',
   fontWeight: '500',
   lineHeight: '16px',
})

export const TimeBox = style({
   marginLeft: 'auto',
})

export const TimeTxt = style({
   color: color['gray-400'],
   fontSize: '12px',
   fontWeight: '500',
   lineHeight: '16px',
})
