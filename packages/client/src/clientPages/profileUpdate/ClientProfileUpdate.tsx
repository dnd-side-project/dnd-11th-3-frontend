'use client'

import { useProfileUpdateForm } from '@entities/profileUpdate'
import { Button } from '@gds/component'
import { ProfileUpdateInputSection } from '@widgets/AccountProfileUpdate'
import { marginBox, pageContainer } from './style.css'

function ClientProfileUpdate() {
   const updateForm = useProfileUpdateForm()
   return (
      <div className={pageContainer}>
         <ProfileUpdateInputSection form={updateForm} />
         <div className={marginBox}>
            <Button type="button" size="medium" variant="filled">
               가입하기
            </Button>
         </div>
      </div>
   )
}

export default ClientProfileUpdate
