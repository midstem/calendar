import { useContext } from 'react'

import { ModalContext } from '.'

export const useModalContext = () => {
  const data = useContext(ModalContext)

  if (!data) {
    throw new Error('useModalContext was used outside of its Provider')
  }

  return data
}
