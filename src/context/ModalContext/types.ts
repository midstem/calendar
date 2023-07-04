import { MouseEvent, ReactNode } from 'react'

type PositionT = {
  x: number
  y: number
  containerW: number
}

export type ModalContextT = {
  showTooltip: boolean
  position: PositionT
  onOpen: <T = MouseEvent<HTMLDivElement, MouseEvent>>(
    event: T,
    modal: ReactNode,
  ) => void
  onClose: () => void
  modal: ReactNode
}
