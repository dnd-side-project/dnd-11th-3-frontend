import { Typo as typo, typoBox, typoWrapper } from './typography.css'

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
            <span className={typo.h1.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.h1.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.h1.sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>h2</h3>
            <span className={typo.h2.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.h2.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.h2.sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>h3</h3>
            <span className={typo.h3.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.h3.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.h3.sb}>공무원 업무습득! 공무인!</span>
          </div>
        </div>
      </div>
      <div>
        <h1>Body</h1>
        <div className={typoWrapper}>
          <div className={typoBox}>
            <h3>body1</h3>
            <span className={typo.body1.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body1.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body1.sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>body2</h3>
            <span className={typo.body2.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body2.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body2.sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>body3</h3>
            <span className={typo.body3.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body3.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body3.sb}>공무원 업무습득! 공무인!</span>
          </div>
          <div className={typoBox}>
            <h3>body4</h3>
            <span className={typo.body4.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.body4.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.body4.sb}>공무원 업무습득! 공무인!</span>
          </div>
        </div>
      </div>
      <div>
        <h1>Highlight</h1>
        <div className={typoWrapper}>
          <div className={typoBox}>
            <h3>hightlight1</h3>
            <span className={typo.highlight1.lg}>공무원 업무습득! 공무인!</span>
            <span className={typo.highlight1.md}>공무원 업무습득! 공무인!</span>
            <span className={typo.highlight1.sb}>공무원 업무습득! 공무인!</span>
          </div>
        </div>
      </div>
    </>
  )
}
