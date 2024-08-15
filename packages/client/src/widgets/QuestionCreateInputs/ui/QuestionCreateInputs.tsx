'use client'

import { Button, TextArea } from '@gmi-design-system'
import { pageWrapper } from './questionCreateInputs.css'

export function QuestionCreateInputs() {
   return (
      <div className={pageWrapper}>
         {/* <TextInput label="Question" /> */}
         <TextArea />
         <Button
            variant="filled"
            size="large"
            onClick={() => {
               console.log('Submit')
            }}
         >
            Submit
         </Button>
      </div>
   )
}
