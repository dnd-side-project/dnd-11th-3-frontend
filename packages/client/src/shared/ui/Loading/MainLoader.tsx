import { CSSProperties } from 'react'
import { Spinner } from '@gds/component'
import * as styles from './style.css'

interface Props {
   loading: boolean
   height?: CSSProperties['height']
}

export function MainLoader({ loading = false, height = '100%' }: Props) {
   return (
      <>
         {loading && (
            <div style={{ height }} className={styles.loadingWrapper}>
               <div className={styles.spinnerWrapper}>
                  <Spinner size="large" />
               </div>
            </div>
         )}
      </>
   )
}
