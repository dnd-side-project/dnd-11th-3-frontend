'use client'

import React, { useEffect } from 'react'
import useHeader from '@/shared/hooks/useHeader'

function Account() {
   const { setHeader } = useHeader()

   useEffect(() => {
      setHeader('마이페이지')
   })

   return <div style={{ marginTop: '80px' }}>mypage</div>
}

export default Account
