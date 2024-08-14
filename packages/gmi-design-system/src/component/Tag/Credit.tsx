import React from 'react'
import { CreditBox, IconBox, TextSpan } from './index.css'
import { IconOrangeCredit } from '../../icon/default/IconOrangeCredit'

interface Props {
  coin: string
}

const Credit = ({ coin }: Props) => {
  return (
    <div className={CreditBox}>
      <span className={TextSpan}>{coin}</span>
      <div className={IconBox}>
        <IconOrangeCredit />
      </div>
    </div>
  )
}

export default Credit
