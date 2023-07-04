import { useRef } from 'react'

import { useModalContext } from '../../context/ModalContext/useModalContext'

export const useModal = () => {
  const {
    showTooltip,
    position: { x, y, containerW },
    modal,
  } = useModalContext()

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
    showTooltip,
    indentTop: y,
    ref,
    modalWidth,
    modal,
  }
}
