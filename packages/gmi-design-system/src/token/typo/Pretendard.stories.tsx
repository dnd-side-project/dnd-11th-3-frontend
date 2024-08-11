import { typo, typoBox, typoWrapper } from './typography.css'

export default {
  title: 'Foundation/Pretendard',
}

export function Pretendard() {
  return (
    <>
      <div>
        <h1>Title</h1>
        <div className={typoWrapper}>
          <div className={typoBox}>
            <h3>h1</h3>
            <span className={typo.h1.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.h1.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.h1.Sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>h2</h3>
            <span className={typo.h2.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.h2.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.h2.Sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>h3</h3>
            <span className={typo.h3.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.h3.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.h3.Sb}>공무원 업무습득! 공무인!</span>
          </div>
        </div>
      </div>
      <div>
        <h1>Body</h1>
        <div className={typoWrapper}>
          <div className={typoBox}>
            <h3>body1</h3>
            <span className={typo.body1.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body1.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body1.Sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>body2</h3>
            <span className={typo.body2.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body2.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body2.Sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>body3</h3>
            <span className={typo.body3.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body3.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body3.Sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>body4</h3>
            <span className={typo.body4.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body4.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body4.Sb}>공무원 업무습득! 공무인!</span>
          </div>
        </div>
      </div>
      <div>
        <h1>Highlight</h1>
        <div className={typoWrapper}>
          <div className={typoBox}>
            <h3>hightlight1</h3>
            <span className={typo.highlight1.Lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.highlight1.Md}>공무원 업무습득! 공무인!</span>
            <span className={typo.highlight1.Sb}>공무원 업무습득! 공무인!</span>
          </div>
        </div>
      </div>
    </>
  )
}
