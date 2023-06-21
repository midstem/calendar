import { useState } from 'react'

export const useMonthSlot = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const onEventClickHandler = (
    isCollapsedSlot: boolean,
    callback: () => void,
  ): void => {
    if (isCollapsedSlot) setModalOpen(true)

    if (!isCollapsedSlot) callback()
  }

  return { modalOpen, closeModalHandler: setModalOpen, onEventClickHandler }
}
