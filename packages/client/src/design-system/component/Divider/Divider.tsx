import { dividerWrapper } from './divider.css'

export interface DividerProps {
   variant?: 'primary' | 'secondary' | 'default'
}

export function Divider({ variant = 'default' }: DividerProps) {
   return (
      <div
         className={dividerWrapper({
            variant,
         })}
      />
   )
}
