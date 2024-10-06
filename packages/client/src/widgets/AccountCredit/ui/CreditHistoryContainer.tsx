'use client'

import { Divider } from '@gds/component'
import { useRouter } from 'next/navigation'
import { useGetMemberProfile } from 'src/clientPages/account/api/profile'
import CreditListsContainer from './CreditListsContainer'
import CreditAmount from './CreditAmount'
import { Wrapper } from './style.css'

export function CreditHistoryContainer() {
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
      <div className={Wrapper}>
         <CreditAmount creditAmount={memberData?.credit} />
         <Divider />
         <CreditListsContainer />
      </div>
   )
}
