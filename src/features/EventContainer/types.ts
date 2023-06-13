import { ReactChildrenT } from '../../types'

export type EventContainerProps = ReactChildrenT & {
  isSelected: boolean
  overlapping?: number
  start: string
  duration?: Duration
  position?: number | string
  width?: string
  index: number
  numberOfEvents: number
  onClick: () => void
}
