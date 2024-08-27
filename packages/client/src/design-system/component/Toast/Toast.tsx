import { ReactNode } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { IconClose, IconCheckFilled } from '@gds/icon'
import { color, Typo } from '@gds/token'
import * as style from './toast.css'

export function ToastPrepare() {
   return <Toaster />
}

export interface ToastData {
   title?: ReactNode
   description?: ReactNode
   durationMs?: number
}

function renderToast(icon: ReactNode, message: ToastData) {
   toast.custom(
      (t) => (
         <div className={style.toastBase}>
            <div className={style.left}>
               <div className={style.iconContainer}>{icon}</div>
               <div className={style.titleAndMessageContainer}>
                  {message.title && (
                     <div className={style.titleContainer}>
                        <div className={Typo.body2.sb}>{message.title}</div>
                     </div>
                  )}
                  {message.description && (
                     <div className={style.messageContainer}>
                        <div className={Typo.body2.lg}>
                           {message.description}
                        </div>
                     </div>
                  )}
               </div>
            </div>
            <div
               className={style.closeContainer}
               role="button"
               aria-label="Close"
               tabIndex={0}
               onClick={() => {
                  toast.remove(t.id)
               }}
               onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                     toast.remove(t.id)
                  }
               }}
            >
               <IconClose />
            </div>
         </div>
      ),
      { position: 'top-right', duration: message.durationMs || 3000 },
   )
}

export const Toast = {
   success: (message: ToastData) => {
      renderToast(<IconCheckFilled color={color['primary-main']} />, message)
   },
   error: (message: ToastData) => {
      renderToast(<IconCheckFilled color={color.error} />, message)
   },
}
