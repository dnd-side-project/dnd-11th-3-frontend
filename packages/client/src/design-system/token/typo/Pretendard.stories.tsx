import { TYPO, typoBox, typoWrapper } from './typography.css'

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
                  <span className={TYPO.h1.Lg}>공무원 업무습득! 공무인!</span>
                  <span className={TYPO.h1.Md}>공무원 업무습득! 공무인!</span>
                  <span className={TYPO.h1.Sb}>공무원 업무습득! 공무인!</span>
               </div>
               <div className={typoBox}>
                  <h3>h2</h3>
                  <span className={TYPO.h2.Lg}>공무원 업무습득! 공무인!</span>
                  <span className={TYPO.h2.Md}>공무원 업무습득! 공무인!</span>
                  <span className={TYPO.h2.Sb}>공무원 업무습득! 공무인!</span>
               </div>
               <div className={typoBox}>
                  <h3>h3</h3>
                  <span className={TYPO.h3.Lg}>공무원 업무습득! 공무인!</span>
                  <span className={TYPO.h3.Md}>공무원 업무습득! 공무인!</span>
                  <span className={TYPO.h3.Sb}>공무원 업무습득! 공무인!</span>
               </div>
            </div>
         </div>
         <div>
            <h1>Body</h1>
            <div className={typoWrapper}>
               <div className={typoBox}>
                  <h3>body1</h3>
                  <span className={TYPO.body1.Lg}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body1.Md}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body1.Sb}>
                     공무원 업무습득! 공무인!
                  </span>
               </div>
               <div className={typoBox}>
                  <h3>body2</h3>
                  <span className={TYPO.body2.Lg}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body2.Md}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body2.Sb}>
                     공무원 업무습득! 공무인!
                  </span>
               </div>
               <div className={typoBox}>
                  <h3>body3</h3>
                  <span className={TYPO.body3.Lg}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body3.Md}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body3.Sb}>
                     공무원 업무습득! 공무인!
                  </span>
               </div>
               <div className={typoBox}>
                  <h3>body4</h3>
                  <span className={TYPO.body4.Lg}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body4.Md}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.body4.Sb}>
                     공무원 업무습득! 공무인!
                  </span>
               </div>
            </div>
         </div>
         <div>
            <h1>Highlight</h1>
            <div className={typoWrapper}>
               <div className={typoBox}>
                  <h3>hightlight1</h3>
                  <span className={TYPO.highlight1.Lg}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.highlight1.Md}>
                     공무원 업무습득! 공무인!
                  </span>
                  <span className={TYPO.highlight1.Sb}>
                     공무원 업무습득! 공무인!
                  </span>
               </div>
            </div>
         </div>
      </>
   )
}
