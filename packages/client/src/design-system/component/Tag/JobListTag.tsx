import React from 'react'
import { JobListBox } from './index.css'

export interface JobListProps {
   name: string
}

export function JobListTag({ name }: JobListProps) {
   return <div className={JobListBox}>{name}</div>
}
