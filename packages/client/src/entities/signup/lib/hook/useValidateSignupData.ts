import { UseFormReturn, useWatch } from 'react-hook-form'

import type { SignupFormValues } from './useSignupForm'

export const useValidateSignupData = (
   form: UseFormReturn<SignupFormValues>,
) => {
   const { officialEmail } = useWatch({
      control: form.control,
   })

   return {
      canSubmit: false,
   }
}
