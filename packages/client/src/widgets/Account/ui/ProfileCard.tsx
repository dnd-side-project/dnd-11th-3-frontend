import React from 'react'
import Image from 'next/image'
import { IconEdit } from '@gds/icon'
import { color } from '@gds/token'
import ProfileBackground from 'public/asset/profileBackground.svg'
import * as styles from './style.css'
import CreditWrapper from './CreditWrapper'

function ProfileCard() {
   return (
      <div className={styles.ProfileWrapper}>
         <Image src={ProfileBackground} alt="profile background image" />
         <div className={styles.AbsoluteBox}>
            <div className={styles.ProfileInfoWrapper}>
               <div>profile</div>
               <div className={styles.TxtWrapper}>
                  <div>
                     <span className={styles.NickNameTxt}>마라탕후루</span>
                  </div>
                  <div>
                     <span className={styles.JobInfoTxt}>
                        법원경비관리 | 관리
                     </span>
                  </div>
               </div>
               <div className={styles.EditBox}>
                  <IconEdit color={color.white} />
               </div>
            </div>
            <CreditWrapper />
         </div>
      </div>
   )
}
export default ProfileCard
