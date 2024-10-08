import { color } from '@gds/token'
import { style } from '@vanilla-extract/css'

export const Wrapper = style({
   padding: '0 16px',
   display: 'flex',
   flexDirection: 'column',
})

export const Container = style({
   display: 'flex',
   flexDirection: 'column',
})

export const Header = style({
   color: color['gray-100'],
   fontSize: '20px',
   fontWeight: '600',
   lineHeight: '24px',
   letterSpacing: '-0.2px',
   marginTop: '20px',
   height: '46px',
   display: 'flex',
   alignItems: 'center',
})

export const ProfileWrapper = style({
   display: 'flex',
   flexDirection: 'column',
   position: 'relative',
   marginTop: '8px',
})

export const AbsoluteBox = style({
   position: 'absolute',
   top: 16,
   left: 20,
   width: '318px',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
})

export const ProfileInfoWrapper = style({
   display: 'flex',
   color: color.white,
})

export const TxtWrapper = style({
   marginLeft: '10px',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
})

export const NickNameTxt = style({
   fontSize: '18px',
   fontWeight: '600',
   lineHeight: '22px',
   letterSpacing: '-0.18px',
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
})

export const JobInfoTxt = style({
   fontSize: '14px',
   fontWeight: '500',
   lineHeight: '18px',
   marginTop: '5px',
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
})

export const EditBox = style({
   marginLeft: 'auto',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const CreditBox = style({
   backgroundColor: color.white,
   borderRadius: '8px',
   padding: '20px',
   marginTop: '10px',
})

export const CreditTitle = style({
   fontSize: '16px',
   fontWeight: '600',
})

export const Line = style({
   border: `1px solid ${color['gray-800']}`,
   margin: '10px 0',
})

export const CreditBottomWrapper = style({
   display: 'flex',
   alignItems: 'center',
   color: color['primary-main'],
})

export const AmountBox = style({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

export const CreditAmount = style({
   fontSize: '25px',
   fontWeight: '600',
   lineHeight: '30px',
   marginRight: '6px',
})

export const CreditMore = style({
   marginLeft: 'auto',
   fontSize: '14px',
   fontWeight: '600',
   lineHeight: '16px',
   cursor: 'pointer',
   display: 'flex',
   alignItems: 'center',
})

export const MarginBox = style({
   margin: '24px 0',
})

export const TitleMenu = style({
   fontSize: '16px',
   fontWeight: '600',
   color: color['gray-200'],
})

export const UrlBox = style({
   marginTop: '16px',
   display: 'flex',
   alignItems: 'center',
})

export const UrlMenu = style({
   fontSize: '18px',
   fontWeight: '600',
   lineHeight: '22px',
   letterSpacing: '-0.18px',
   color: color['gray-100'],
   display: 'flex',
   alignItems: 'center',
})

export const IconBox = style({
   marginLeft: 'auto',
   cursor: 'pointer',
})

export const ProfileImageWrapper = style({
   borderRadius: 8,
   width: 48,
   height: 48,
   backgroundColor: color['secondary-light'],
   border: `1px solid ${color['gray-800']}`,
})
