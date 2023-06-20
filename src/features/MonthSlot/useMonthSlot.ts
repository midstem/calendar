import { useState } from 'react'

export const useMonthSlot = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const openModalHandler = (isCollapsedSlot: boolean): void => {
    if (isCollapsedSlot) {
      setModalOpen(true)
    }
  }

  return { modalOpen, closeModalHandler: setModalOpen, openModalHandler }
}
