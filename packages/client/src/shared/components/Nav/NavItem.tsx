import React from 'react'
import { NavigatorItem, checkedStyle, nonCheckedStyle } from './Nav.css'

interface NavigatorItemProps {
   checked: boolean
   onClick: () => void
   children: React.ReactNode
}

function NavItem({ checked, onClick, children }: NavigatorItemProps) {
   return (
      <button
         type="button"
         className={`${NavigatorItem} ${checked ? checkedStyle : nonCheckedStyle}`}
         onClick={onClick}
      >
         {children}
      </button>
   )
}

export default NavItem
