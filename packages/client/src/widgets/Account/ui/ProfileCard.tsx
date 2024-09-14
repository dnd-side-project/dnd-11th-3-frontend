'use client'

import Image from 'next/image'
import { IconCharacter, IconEdit } from '@gds/icon'
import { color } from '@gds/token'
import ProfileBackground from 'public/asset/profileBackground.svg'
import { useGetMemberProfile } from 'src/clientPages/account/api/profile'
import { useRouter } from 'next/navigation'
import * as styles from './style.css'
import CreditSection from './CreditSection'

function ProfileCard() {
   const router = useRouter()
   const {
      data: memberData,
      isError: memberDataIsError,
      error: memberDataError,
   } = useGetMemberProfile()

   if (memberDataIsError) {
      router.push('/home')
      // TODO: toast로 수정 필요
      alert(memberDataError.message || '서버 오류가 발생했습니다.')
   }
   return (
      <div className={styles.ProfileWrapper}>
         <Image src={ProfileBackground} alt="profile background image" />
         <div className={styles.AbsoluteBox}>
            <div className={styles.ProfileInfoWrapper}>
               <div className={styles.profileImageWrapper}>
                  <IconCharacter color={color['secondary-main']} size={48} />
               </div>
               <div className={styles.TxtWrapper}>
                  <div>
                     <span className={styles.NickNameTxt}>
                        {memberData?.nickname}
                     </span>
                  </div>
                  <div>
                     <span className={styles.JobInfoTxt}>
                        {memberData?.jobGroup} | {memberData?.jobCategory}
                     </span>
                  </div>
               </div>
               <button
                  type="button"
                  onClick={() => {
                     router.push('/account/profile/update')
                  }}
                  className={styles.EditBox}
                  aria-label="Edit profile"
               >
                  <IconEdit color={color.white} />
               </button>
            </div>
            <CreditSection credit={memberData?.credit} />
         </div>
      </div>
   )
}
export default ProfileCard
