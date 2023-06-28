import { useEffect, useRef, useState } from 'react'

export const useMonthSlot = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [modalRef])

  const onEventClickHandler = (
    isCollapsedSlot: boolean,
    callback: () => void,
  ): void => {
    if (isCollapsedSlot) setModalOpen(true)

    if (!isCollapsedSlot) callback()
  }

  return {
    modalOpen,
    closeModalHandler: setModalOpen,
    onEventClickHandler,
    modalRef,
  }
}
