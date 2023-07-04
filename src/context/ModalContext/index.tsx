import {
  useState,
  createContext,
  useEffect,
  useDeferredValue,
  MouseEvent,
  useMemo,
  useCallback,
  ReactNode,
} from 'react'

import { ReactChildrenT } from '../../types'
import Modal from '../../features/Modal'

import { ModalContextT } from './types'

export const ModalContext = createContext<ModalContextT | null>(null)

export const ModalProvider = ({ children }: ReactChildrenT): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0, containerW: 0 })
  const previousState = useDeferredValue(showTooltip)
  const [modal, setModal] = useState<ReactNode>()

  const onOpen: ModalContextT['onOpen'] = useCallback(
    (event: MouseEvent<HTMLDivElement, MouseEvent>, modal: ReactNode): void => {
      const calendarElement = document.querySelector('.calendar')
      const element = event.target as HTMLElement

      if (!showTooltip || element?.closest?.('.event')) {
        setPosition({
          x: event.clientX,
          y: event.clientY,
          containerW: calendarElement?.clientWidth || 0,
        })
        setShowTooltip(true)
        setModal(modal)
      }
    },
    [showTooltip],
  ) as ModalContextT['onOpen']

  const onClose = (): void => {
    setShowTooltip(false)
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

  useEffect(() => {
    document.addEventListener('click', onClickOutside)

    return () => {
      document.removeEventListener('click', onClickOutside)
    }
  }, [onClickOutside, previousState])

  const contextValues: ModalContextT = useMemo(
    () => ({
      showTooltip,
      position,
      onOpen,
      onClose,
      modal,
    }),
    [modal, onOpen, position, showTooltip],
  )

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}
