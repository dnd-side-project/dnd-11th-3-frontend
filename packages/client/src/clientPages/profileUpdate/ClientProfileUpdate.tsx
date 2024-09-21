'use client'

import { useProfileUpdateForm } from '@entities/profileUpdate'
import { Button } from '@gds/component'
import { ProfileUpdateInputSection } from '@widgets/AccountProfileUpdate'

function ClientProfileUpdate() {
   const updateForm = useProfileUpdateForm()
   return (
      <div>
         <ProfileUpdateInputSection form={updateForm} />
         <Button type="button" size="medium" variant="filled">
            가입하기
         </Button>
      </div>
   )
}

export default ClientProfileUpdate
