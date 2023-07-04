import {
  MouseEvent,
  ReactNode,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { ModalContextT } from './types'

export const useModalContext = () => {
  const [showModal, setShowModal] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0, containerW: 0 })
  const previousState = useDeferredValue(showModal)
  const [modal, setModal] = useState<ReactNode>()

  const onOpen = useCallback(
    (event: MouseEvent<HTMLDivElement, MouseEvent>, modal: ReactNode): void => {
      const calendarElement = document.querySelector('.calendar')
      const element = event.target as HTMLElement

      if (!showModal || element?.closest?.('.event')) {
        setPosition({
          x: event.clientX,
          y: event.clientY,
          containerW: calendarElement?.clientWidth || 0,
        })
        setShowModal(true)
        setModal(modal)
      }
    },
    [showModal],
  ) as ModalContextT['onOpen']

  const onClose = (): void => {
    setShowModal(false)
  }

  const onClickOutside = useCallback(
    (event: Event): void => {
      const element = event.target as HTMLElement

      if (previousState && !element.closest('.event')) {
        onClose()
      }
    },
    [previousState],
  )

  const contextValues: ModalContextT = useMemo(
    () => ({
      showModal,
      position,
      onOpen,
      onClose,
      modal,
    }),
    [modal, onOpen, position, showModal],
  )

  useEffect(() => {
    document.addEventListener('click', onClickOutside)

    return () => {
      document.removeEventListener('click', onClickOutside)
    }
  }, [onClickOutside, previousState])

  return { contextValues }
}
