import React from 'react'
import { IconMainClear } from '@gds/icon'
import { IconBox, JobGreenTagBox } from './index.css'

interface JobTagProps {
  name: string
}

export function JobGreenTag({ name }: JobTagProps) {
  return (
    <div className={JobGreenTagBox}>
      <span>{name}</span>
      <div className={IconBox}>
        <IconMainClear />
      </div>
    </div>
  )
}
