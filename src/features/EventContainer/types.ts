import { MouseEvent } from 'react'

import { ReactChildrenT } from '../../types'

export type EventContainerProps = ReactChildrenT & {
  isSelected: boolean
  overlapping?: number
  start: string
  duration?: Duration
  index: number
  numberOfEvents: number
  onClick: (e: MouseEvent) => void
}
