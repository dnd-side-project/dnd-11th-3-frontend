import secureLocalStorage from 'react-secure-storage'

/**
 * 액세스 토큰 가져오기
 */
export const getAccessToken = () => {
   return secureLocalStorage.getItem('ACCESS_TOKEN') || undefined
}

/**
 * 액세스 토큰 업데이트
 */
export const updateAccessToken = (token: string) => {
   secureLocalStorage.setItem('ACCESS_TOKEN', token)
}

/**
 * 토큰 삭제 (로그아웃)
 */
export const removeAccessToken = () => {
   secureLocalStorage.removeItem('ACCESS_TOKEN')
}
