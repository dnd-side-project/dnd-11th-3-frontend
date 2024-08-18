import { Button, ButtonProps, TextInput, TextInputProps } from '@gds/component'
import { CSSProperties } from 'react'
import * as styles from './style.css'

interface Props {
   inputProps: Omit<TextInputProps, 'size' | 'label'> & {
      width: CSSProperties['width']
   }
   buttonProps: Omit<ButtonProps, 'size'> & { width: CSSProperties['width'] }
   buttonChildren: React.ReactNode
}

export function UnlabeledInputWithButton({
   inputProps,
   buttonProps,
   buttonChildren,
}: Props) {
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
