import React, { useEffect } from 'react'

export const useScrollHandler = (
   setFixed: React.Dispatch<React.SetStateAction<boolean>>,
   navSectionId: string,
) => {
   useEffect(() => {
      const navbar = document.getElementById(navSectionId)
      const navOffset = navbar?.offsetTop || 0

      const handleScroll = () => {
         setFixed(window.scrollY >= navOffset)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [setFixed, navSectionId])
}
