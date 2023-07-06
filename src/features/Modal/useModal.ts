import { useRef } from 'react'

import { useModals } from '../../context/ModalContext/useModals'

export const useModal = () => {
  const { x, y, containerW, userModal, isOpen } = useModals()

  const calendarElement = document.querySelector('.calendar')
  const ref = useRef<HTMLDivElement | null>(null)
  const modalWidth = ref.current?.offsetWidth || 0

  const getIndentLeft = (): number => {
    if (containerW - x < modalWidth) return x - modalWidth

    return x
  }

  return {
    getIndentLeft,
    calendarElement,
    isOpen,
    indentTop: y,
    ref,
    modalWidth,
    userModal,
  }
}
