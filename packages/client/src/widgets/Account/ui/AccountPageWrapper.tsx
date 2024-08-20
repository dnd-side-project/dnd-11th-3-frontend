import React from 'react'
import { Divider } from '@gds/component'
import * as styles from './style.css'
import ProfileCard from './ProfileCard'
import AccountMenu, { MenuUrl } from './AccountMenu'

export function AccountPageWrapper() {
   const MyActivities: MenuUrl[] = [
      { smallTitle: '작성한 질문', url: '/account/question' },
      { smallTitle: '댓글 단 질문', url: '/account/question' },
   ]

   const MyScrap: MenuUrl[] = [
      { smallTitle: '스크랩한 질문', url: '/account/bookmark' },
   ]
   return (
      <div className={styles.Container}>
         <div className={styles.Wrapper}>
            <span className={styles.Header}>마이페이지</span>
            <ProfileCard />
         </div>
         <div className={styles.marginBox}>
            <Divider />
         </div>
         <div className={styles.Wrapper}>
            <AccountMenu title="나의 활동" menuList={MyActivities} />
         </div>
         <div className={styles.marginBox}>
            <Divider />
         </div>
         <div className={styles.Wrapper}>
            <AccountMenu title="스크랩" menuList={MyScrap} />
         </div>
         <div className={styles.marginBox}>
            <Divider />
         </div>
         <div className={styles.Wrapper}>
            {/** TODO: api 연결 필요 */}
            <span className={styles.titleMenu}>로그아웃</span>
         </div>
      </div>
   )
}
