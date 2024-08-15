import secureLocalStorage from 'react-secure-storage'

export const setLocalStorage = (key: string, value: string) => {
   secureLocalStorage.setItem(key, value)
}

export const removeLocalStorage = (key: string) =>
   secureLocalStorage.removeItem(key)

export const getLocalStorage = (key: string) => {
   return secureLocalStorage.getItem(key)
}
