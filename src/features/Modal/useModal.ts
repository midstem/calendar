import { useRef } from 'react'

import { useModals } from '../../context/ModalContext/useModals'

export const useModal = () => {
  const {
    showModal,
    position: { x, y, containerW },
    modal,
  } = useModals()

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
    showModal,
    indentTop: y,
    ref,
    modalWidth,
    modal,
  }
}
