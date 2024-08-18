import { Button, ButtonProps, TextInput, TextInputProps } from '@gds/component'
import { CSSProperties, ReactNode } from 'react'
import * as styles from './style.css'

interface Props {
   inputProps: Omit<TextInputProps, 'size' | 'label'> & {
      label: ReactNode
      width: CSSProperties['width']
   }
   buttonProps: Omit<ButtonProps, 'size'> & { width: CSSProperties['width'] }
   buttonChildren: React.ReactNode
}

export function LabeledInputWithButton({
   inputProps,
   buttonProps,
   buttonChildren,
}: Props) {
   if (!inputProps?.label) {
      console.error('label is required')
   }
   return (
      <div className={styles.contentWrapper}>
         <div
            className={styles.inputWrapper}
            style={{ width: inputProps.width }}
         >
            <TextInput {...inputProps} size="medium" />
         </div>
         <div
            className={styles.buttonWrapper}
            style={{ width: buttonProps.width }}
         >
            <Button size="medium" {...buttonProps}>
               {buttonChildren}
            </Button>
         </div>
      </div>
   )
}
